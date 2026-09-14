import React, { useState, useRef } from 'react';

const BACKEND = 'http://localhost:5000';

const InterviewSetup = ({ company, onBack, onStartInterview }) => {
  const [step, setStep] = useState(1); // 1=upload  2=permissions  3=analyzing
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [camGranted, setCamGranted] = useState(false);
  const [error, setError] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const fileInputRef = useRef();

  if (!company) return null;

  // ── Step 1: handle file drop / pick ──────────────────────────────
  const handleFile = (file) => {
    if (!file) return;
    if (file.type !== 'application/pdf') {
      setError('Please upload a PDF file only.');
      return;
    }
    setError('');
    setResumeFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  // ── Step 2: request camera + mic ─────────────────────────────────
  const requestPermissions = async () => {
    setError('');
    try {
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setCamGranted(true);
    } catch {
      setError('Camera or microphone access was denied. Please allow it in your browser settings.');
    }
  };

  // ── Step 3: upload resume → backend → get questions ──────────────
  const analyzeResume = async () => {
    setStep(3);
    setAnalyzing(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('resume', resumeFile);
      formData.append('company', company.name);
      if (jobDescription.trim()) {
        formData.append('jobDescription', jobDescription.trim());
      }
      if (company.moreInfo || company.description) {
        formData.append('companyDescription', company.moreInfo || company.description);
      }

      const res = await fetch(`${BACKEND}/api/interview/start`, {
        method: 'POST',
        body: formData,
      });

      const textResponse = await res.text();
      let data;
      try {
        data = JSON.parse(textResponse);
      } catch (e) {
        throw new Error('Backend server connection error. Please try again.');
      }

      if (!res.ok) {
        throw new Error(data.error || 'Server error');
      }

      // Pass sessionId + questions to parent
      onStartInterview({ sessionId: data.sessionId, questions: data.questions });
    } catch (err) {
      setError(err.message || 'Failed to analyze resume. Please try again.');
      setStep(2);
    } finally {
      setAnalyzing(false);
    }
  };

  // ─────────────────────────────────────────────────────────────────
  return (
    <div style={{
      maxWidth: '560px', margin: '32px auto', padding: '28px',
      fontFamily: "'Inter', system-ui, sans-serif"
    }}>
      {/* Progress steps */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '36px' }}>
        {['Upload Resume', 'Permissions', 'Analyzing'].map((label, i) => {
          const num = i + 1;
          const done = step > num;
          const active = step === num;
          return (
            <React.Fragment key={label}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flex: 1 }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: done ? '#10b981' : active ? '#4f46e5' : '#e2e8f0',
                  color: (done || active) ? 'white' : '#94a3b8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: '700', fontSize: '14px', transition: 'all 0.3s'
                }}>
                  {done ? '✓' : num}
                </div>
                <span style={{
                  fontSize: '11px', fontWeight: active ? '700' : '500',
                  color: active ? '#4f46e5' : done ? '#10b981' : '#94a3b8'
                }}>{label}</span>
              </div>
              {i < 2 && (
                <div style={{
                  height: '2px', flex: 2, marginBottom: '18px',
                  background: step > num + 1 ? '#10b981' : step > num ? '#4f46e5' : '#e2e8f0',
                  transition: 'background 0.3s'
                }} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* ── STEP 1: Resume Upload ── */}
      {step === 1 && (
        <div>
          <h2 style={{ fontWeight: '700', color: '#1e293b', fontSize: '22px', marginBottom: '6px' }}>
            Upload your Resume
          </h2>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>
            Our AI will read your resume and generate personalized interview questions for <strong>{company.name}</strong>.
          </p>

          {/* Drop zone */}
          <div
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            style={{
              border: `2px dashed ${dragOver ? '#4f46e5' : resumeFile ? '#10b981' : '#cbd5e1'}`,
              borderRadius: '14px',
              padding: '40px 24px',
              textAlign: 'center',
              background: dragOver ? '#f5f3ff' : resumeFile ? '#f0fdf4' : '#f8fafc',
              cursor: 'pointer', transition: 'all 0.25s', marginBottom: '16px'
            }}
          >
            <input
              type="file"
              accept="application/pdf"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={(e) => handleFile(e.target.files[0])}
            />
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>
              {resumeFile ? '✅' : '📄'}
            </div>
            {resumeFile ? (
              <>
                <p style={{ fontWeight: '700', color: '#10b981', fontSize: '15px', marginBottom: '4px' }}>
                  {resumeFile.name}
                </p>
                <p style={{ color: '#64748b', fontSize: '13px' }}>Click to replace</p>
              </>
            ) : (
              <>
                <p style={{ fontWeight: '600', color: '#334155', fontSize: '15px', marginBottom: '4px' }}>
                  Drag & drop your PDF resume here
                </p>
                <p style={{ color: '#94a3b8', fontSize: '13px' }}>or click to browse — PDF only, max 10 MB</p>
              </>
            )}
          </div>
          
          <div style={{ marginBottom: '16px', textAlign: 'left', width: '100%', boxSizing: 'border-box' }}>
            <label style={{ display: 'block', fontWeight: '600', color: '#1e293b', fontSize: '14px', marginBottom: '8px' }}>
              Job Description (Optional)
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here to generate highly relevant questions..."
              style={{
                width: '100%', minHeight: '100px', padding: '12px', borderRadius: '10px',
                border: '1px solid #cbd5e1', fontSize: '14px', color: '#334155', fontFamily: 'inherit',
                resize: 'vertical', boxSizing: 'border-box'
              }}
            />
          </div>

          {error && <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '12px' }}>{error}</p>}

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button onClick={onBack} style={{
              background: '#f1f5f9', border: 'none', color: '#475569',
              padding: '11px 20px', borderRadius: '10px', fontWeight: '600',
              cursor: 'pointer', fontSize: '14px'
            }}>Back</button>
            <button
              onClick={() => { if (resumeFile) setStep(2); else setError('Please upload your resume first.'); }}
              style={{
                background: resumeFile ? 'linear-gradient(135deg,#4f46e5,#7c3aed)' : '#e2e8f0',
                border: 'none', color: resumeFile ? 'white' : '#94a3b8',
                padding: '11px 24px', borderRadius: '10px', fontWeight: '700',
                cursor: resumeFile ? 'pointer' : 'not-allowed', fontSize: '14px'
              }}
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 2: Permissions ── */}
      {step === 2 && (
        <div>
          <h2 style={{ fontWeight: '700', color: '#1e293b', fontSize: '22px', marginBottom: '6px' }}>
            Camera & Microphone
          </h2>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '28px' }}>
            We need access to your camera and microphone to conduct the video interview.
          </p>

          {/* Permission card */}
          <div style={{
            border: `2px solid ${camGranted ? '#10b981' : '#e2e8f0'}`,
            borderRadius: '14px', padding: '24px',
            background: camGranted ? '#f0fdf4' : '#fafafa',
            marginBottom: '24px', transition: 'all 0.3s', textAlign: 'center'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>
              {camGranted ? '✅' : '📷'}
            </div>
            <p style={{ fontWeight: '600', color: '#1e293b', fontSize: '15px', marginBottom: '8px' }}>
              {camGranted ? 'Access Granted!' : 'Camera & Microphone'}
            </p>
            <p style={{ color: '#64748b', fontSize: '13px', marginBottom: camGranted ? '0' : '16px' }}>
              {camGranted
                ? 'You\'re all set. Your video and audio are ready.'
                : 'Click the button below. Your browser will ask for permission.'}
            </p>
            {!camGranted && (
              <button onClick={requestPermissions} style={{
                background: 'linear-gradient(135deg,#4f46e5,#7c3aed)',
                border: 'none', color: 'white',
                padding: '10px 22px', borderRadius: '8px',
                fontWeight: '700', cursor: 'pointer', fontSize: '14px'
              }}>
                🎥 Allow Camera & Mic
              </button>
            )}
          </div>

          {error && <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '12px' }}>{error}</p>}

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button onClick={() => setStep(1)} style={{
              background: '#f1f5f9', border: 'none', color: '#475569',
              padding: '11px 20px', borderRadius: '10px', fontWeight: '600',
              cursor: 'pointer', fontSize: '14px'
            }}>Back</button>
            <button
              onClick={() => { if (camGranted) analyzeResume(); else setError('Please grant camera & mic permission first.'); }}
              style={{
                background: camGranted ? 'linear-gradient(135deg,#4f46e5,#7c3aed)' : '#e2e8f0',
                border: 'none', color: camGranted ? 'white' : '#94a3b8',
                padding: '11px 24px', borderRadius: '10px', fontWeight: '700',
                cursor: camGranted ? 'pointer' : 'not-allowed', fontSize: '14px'
              }}
            >
              Start Analysis →
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 3: Analyzing ── */}
      {step === 3 && (
        <div style={{ textAlign: 'center', padding: '24px 0' }}>
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%',
            background: 'linear-gradient(135deg,#4f46e5,#7c3aed)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px', animation: 'spin 2s linear infinite'
          }}>
            <svg stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="36" width="36">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path>
              <path d="M12 6v6l4 2"></path>
            </svg>
          </div>
          <h2 style={{ fontWeight: '700', color: '#1e293b', fontSize: '22px', marginBottom: '8px' }}>
            Analyzing your Resume...
          </h2>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '28px' }}>
            Our AI is reading your resume and generating personalized questions for <strong>{company.name}</strong>. This takes a few seconds.
          </p>

          {/* Animated steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left', maxWidth: '320px', margin: '0 auto' }}>
            {[
              '📄 Reading your resume...',
              '🔍 Identifying your skills & projects...',
              '🤖 Generating personalized questions...',
            ].map((text, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: '#f8fafc', borderRadius: '8px', padding: '10px 14px',
                border: '1px solid #e2e8f0', fontSize: '14px', color: '#475569',
                animation: `fadeIn 0.5s ease ${i * 0.8}s both`
              }}>
                {text}
              </div>
            ))}
          </div>

          {error && (
            <div style={{ marginTop: '24px' }}>
              <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '12px' }}>{error}</p>
              <button onClick={() => setStep(2)} style={{
                background: '#f1f5f9', border: 'none', color: '#475569',
                padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600'
              }}>← Try Again</button>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>
    </div>
  );
};

export default InterviewSetup;
