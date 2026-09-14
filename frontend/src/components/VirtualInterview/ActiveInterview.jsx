import React, { useState, useEffect, useRef } from 'react';
import './VirtualInterview.css';
import VoiceVisualizer from './VoiceVisualizer';

const FALLBACK_QUESTIONS = [
  'Tell me about yourself.',
  'Describe a challenging technical problem you solved.',
  'How would you design a scalable system for a high-traffic application?',
  'Where do you see yourself in the next 3 to 5 years?',
];

const ActiveInterview = ({ company, sessionId, questions, onEndInterview, onQuit }) => {
  const interviewQuestions = questions?.length ? questions : FALLBACK_QUESTIONS;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [status, setStatus] = useState('ai_speaking');
  const [cameraError, setCameraError] = useState(false);
  // Store all answers: [{ question, transcript }]
  const [allAnswers, setAllAnswers] = useState([]);

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognitionRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // ── Start camera ──────────────────────────────────────────────────
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch {
        setCameraError(true);
      }
    };
    startCamera();
    return () => {
      streamRef.current?.getTracks().forEach(t => t.stop());
      recognitionRef.current?.stop();
      synthRef.current?.cancel();
    };
  }, []);

  // ── Init speech recognition ───────────────────────────────────────
  useEffect(() => {
    if (!SpeechRecognition) return;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.onresult = (event) => {
      let t = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        t += event.results[i][0].transcript;
      }
      setTranscript(prev => prev ? prev + ' ' + t : t);
    };
    recognitionRef.current.onerror = () => setIsRecording(false);
  }, []);

  // ── Speak question on change ──────────────────────────────────────
  useEffect(() => {
    speakQuestion(interviewQuestions[currentIndex]);
  }, [currentIndex]);

  const speakQuestion = (text) => {
    setStatus('ai_speaking');
    setIsRecording(false);
    recognitionRef.current?.stop();
    if (synthRef.current) {
      synthRef.current.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.rate = 1.0;
      utt.onend = () => { setStatus('listening'); startRecording(); };
      synthRef.current.speak(utt);
    } else {
      setStatus('listening');
    }
  };

  const startRecording = () => {
    setTranscript('');
    setIsRecording(true);
    setStatus('listening');
    try { recognitionRef.current?.start(); } catch (e) { console.error(e); }
  };

  const stopRecording = () => {
    setIsRecording(false);
    recognitionRef.current?.stop();
  };

  const toggleRecording = () => isRecording ? stopRecording() : startRecording();

  const handleNext = () => {
    stopRecording();
    setStatus('processing');

    // Save this answer
    const updatedAnswers = [
      ...allAnswers,
      { question: interviewQuestions[currentIndex], transcript: transcript.trim() },
    ];
    setAllAnswers(updatedAnswers);

    setTimeout(() => {
      if (currentIndex < interviewQuestions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setTranscript('');
      } else {
        // All done — pass answers + sessionId to parent
        onEndInterview({ sessionId, answers: updatedAnswers });
      }
    }, 1000);
  };

  const handleQuit = () => {
    streamRef.current?.getTracks().forEach(t => t.stop());
    synthRef.current?.cancel();
    onQuit();
  };

  // ─────────────────────────────────────────────────────────────────
  return (
    <div style={{ maxWidth: '980px', margin: '24px auto', padding: '0 16px', fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ background: '#f1f5f9', borderRadius: '999px', padding: '4px 14px', fontWeight: '600', fontSize: '14px', color: '#475569' }}>
            Q {currentIndex + 1} / {interviewQuestions.length}
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {interviewQuestions.map((_, i) => (
              <div key={i} style={{
                width: '10px', height: '10px', borderRadius: '50%',
                background: i < currentIndex ? '#10b981' : i === currentIndex ? '#4f46e5' : '#e2e8f0',
                transition: 'background 0.3s'
              }} />
            ))}
          </div>
        </div>
        <button onClick={handleQuit} style={{
          background: '#fef2f2', border: '1px solid #fecaca', color: '#ef4444',
          padding: '6px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '14px'
        }}>✕ End Interview</button>
      </div>

      {/* Main layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '20px', alignItems: 'start' }}>

        {/* Left: AI panel */}
        <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '28px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>

          {/* AI Avatar */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: status === 'ai_speaking' ? '0 0 0 8px rgba(99,102,241,0.15)' : '0 4px 12px rgba(99,102,241,0.25)',
              marginBottom: '10px', transition: 'box-shadow 0.4s'
            }}>
              <svg stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="32" width="32">
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"></path>
              </svg>
            </div>
            <span style={{ fontWeight: '600', color: '#1e293b', fontSize: '14px' }}>AI Interviewer</span>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>{company?.name}</span>
            <div style={{ marginTop: '10px' }}>
              <VoiceVisualizer isActive={status === 'ai_speaking'} />
            </div>
          </div>

          {/* Question */}
          <div style={{
            background: '#f8fafc', borderRadius: '12px', padding: '18px 20px',
            border: '1px solid #e2e8f0', marginBottom: '24px',
            fontSize: '16px', fontWeight: '500', color: '#1e293b', lineHeight: '1.65', minHeight: '72px'
          }}>
            "{interviewQuestions[currentIndex]}"
          </div>

          {/* Status */}
          <div style={{
            textAlign: 'center', fontSize: '13px', marginBottom: '14px', fontWeight: '600',
            color: status === 'ai_speaking' ? '#6366f1' : isRecording ? '#ef4444' : '#64748b'
          }}>
            {status === 'ai_speaking' ? '🤖 AI is speaking...' :
             status === 'processing' ? '⏳ Saving your response...' :
             isRecording ? '🔴 Recording — speak your answer' : '🎙️ Click mic to start answering'}
          </div>

          {/* Mic button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <button onClick={toggleRecording} disabled={status !== 'listening'} style={{
              width: '64px', height: '64px', borderRadius: '50%', border: 'none',
              background: isRecording ? '#ef4444' : '#4f46e5', color: 'white',
              cursor: status === 'listening' ? 'pointer' : 'not-allowed',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              opacity: status !== 'listening' ? 0.4 : 1,
              boxShadow: isRecording ? '0 0 0 10px rgba(239,68,68,0.18)' : '0 4px 14px rgba(79,70,229,0.35)',
              transition: 'all 0.25s'
            }}>
              {isRecording
                ? <svg fill="white" viewBox="0 0 24 24" height="26" width="26"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>
                : <svg stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="26" width="26">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                  </svg>
              }
            </button>
          </div>

          {/* Transcript */}
          {status !== 'ai_speaking' && (
            <div style={{
              background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px',
              padding: '12px', minHeight: '60px', fontSize: '14px', marginBottom: '22px',
              color: transcript ? '#334155' : '#94a3b8', fontStyle: transcript ? 'normal' : 'italic'
            }}>
              {transcript || 'Your answer will appear here as you speak...'}
            </div>
          )}

          {/* Next / Submit */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={handleNext} disabled={status !== 'listening'} style={{
              background: '#4f46e5', color: 'white', border: 'none',
              padding: '10px 22px', borderRadius: '8px', fontWeight: '700', fontSize: '15px',
              cursor: status === 'listening' ? 'pointer' : 'not-allowed',
              opacity: status !== 'listening' ? 0.4 : 1, transition: 'opacity 0.2s'
            }}>
              {currentIndex < interviewQuestions.length - 1 ? 'Next Question →' : '✓ Submit & Finish'}
            </button>
          </div>
        </div>

        {/* Right: Camera */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{
            borderRadius: '16px', overflow: 'hidden', border: '2px solid #e2e8f0',
            background: '#0f172a', aspectRatio: '4/3', position: 'relative',
            boxShadow: isRecording ? '0 0 0 3px rgba(239,68,68,0.5)' : '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'box-shadow 0.3s'
          }}>
            {cameraError ? (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                <span style={{ fontSize: '32px', marginBottom: '8px' }}>📷</span>
                <span style={{ fontSize: '12px' }}>Camera unavailable</span>
              </div>
            ) : (
              <video ref={videoRef} autoPlay muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }} />
            )}
            {isRecording && (
              <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', alignItems: 'center', gap: '5px', background: 'rgba(0,0,0,0.6)', borderRadius: '999px', padding: '4px 10px' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ef4444', animation: 'recPulse 1s infinite' }} />
                <span style={{ color: 'white', fontSize: '11px', fontWeight: '700' }}>REC</span>
              </div>
            )}
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.55)', borderRadius: '6px', padding: '3px 10px', color: 'white', fontSize: '12px', fontWeight: '500' }}>
              You
            </div>
          </div>

          {/* Tips */}
          <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '12px 14px' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', color: '#92400e', marginBottom: '6px' }}>💡 Tips</p>
            <ul style={{ fontSize: '12px', color: '#78350f', paddingLeft: '16px', margin: 0, lineHeight: '1.8' }}>
              <li>Speak clearly at a steady pace</li>
              <li>Use the STAR method for answers</li>
              <li>Click mic to pause/resume</li>
            </ul>
          </div>
        </div>
      </div>
      <style>{`@keyframes recPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    </div>
  );
};

export default ActiveInterview;
