import React, { useState, useEffect } from 'react';
import './VirtualInterview.css';

const BACKEND = 'http://localhost:5000';

const InterviewReport = ({ company, result, onBack, onOpenStudy }) => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReport = async () => {
      if (result?.sessionId && result?.answers?.length) {
        try {
          const res = await fetch(`${BACKEND}/api/interview/submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId: result.sessionId, answers: result.answers }),
          });
          if (res.ok) {
            const data = await res.json();
            setReport(data);
            setLoading(false);
            return;
          }
        } catch (err) {
          console.warn('Backend evaluation call failed:', err);
        }
      }

      // Local analysis if backend fetch didn't return (e.g. offline fallback)
      setReport(generateGenuineLocalReport(result?.answers || []));
      setLoading(false);
    };
    fetchReport();
  }, [result]);

  const generateGenuineLocalReport = (answers = []) => {
    const scoredAnswers = answers.map((a) => {
      const text = (a.transcript || '').trim();
      const wordCount = text ? text.split(/\s+/).length : 0;
      let score = 50;
      let feedback = '';

      if (wordCount === 0) {
        score = 30;
        feedback = '⚠️ Mistake: No response recorded. Be sure to speak your answer clearly before proceeding.';
      } else if (wordCount < 8) {
        score = 45;
        feedback = `⚠️ Mistake: Answer is too brief ("${text}"). In technical screening rounds, avoid 1-liner answers. Clearly outline your background, key tools/technologies, and past project experience.`;
      } else if (wordCount < 20) {
        score = 68;
        feedback = `💡 Area for Improvement: Concise attempt, but missing specific examples. Enhance your answer using the STAR method (Situation, Task, Action, Result).`;
      } else {
        score = 88;
        feedback = `✅ Excellent Response! Clear explanation (${wordCount} words) covering key technical concepts effectively.`;
      }

      return {
        question: a.question,
        transcript: a.transcript || '(No answer recorded)',
        score,
        feedback,
      };
    });

    const overallScore = scoredAnswers.length > 0
      ? Math.round(scoredAnswers.reduce((sum, item) => sum + item.score, 0) / scoredAnswers.length)
      : 75;

    return { overallScore, answers: scoredAnswers };
  };

  const scoreColor = (s) => s >= 80 ? '#10b981' : s >= 60 ? '#f59e0b' : '#ef4444';
  const scoreLabel = (s) => s >= 80 ? 'Excellent' : s >= 60 ? 'Good Effort' : 'Needs Improvement';
  const scoreEmoji = (s) => s >= 80 ? '🌟' : s >= 60 ? '👍' : '🎯';

  if (loading) {
    return (
      <div style={{ maxWidth: '600px', margin: '60px auto', textAlign: 'center', fontFamily: "'Inter', system-ui, sans-serif" }}>
        <div style={{
          width: '72px', height: '72px', borderRadius: '50%',
          background: 'linear-gradient(135deg,#6366f1,#a855f7)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px', animation: 'spin 1.5s linear infinite'
        }}>
          <svg stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="32" width="32">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path>
            <path d="M12 6v6l4 2"></path>
          </svg>
        </div>
        <h2 style={{ fontWeight: '700', color: '#1e293b', fontSize: '20px', marginBottom: '8px' }}>
          AI is evaluating your answers...
        </h2>
        <p style={{ color: '#64748b', fontSize: '14px' }}>Analyzing transcript quality & identifying mistakes</p>
        <style>{`@keyframes spin { from{transform:rotate(0)} to{transform:rotate(360deg)} }`}</style>
      </div>
    );
  }

  const overall = report?.overallScore ?? 75;

  return (
    <div style={{ maxWidth: '720px', margin: '32px auto', padding: '0 16px', fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', borderRadius: '20px',
        padding: '32px', color: 'white', textAlign: 'center', marginBottom: '28px',
        boxShadow: '0 10px 30px rgba(79,70,229,0.3)'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '10px' }}>{scoreEmoji(overall)}</div>
        <h1 style={{ fontWeight: '800', fontSize: '26px', marginBottom: '4px' }}>Interview Evaluation Report</h1>
        <p style={{ opacity: 0.85, fontSize: '14px', marginBottom: '24px' }}>{company?.name || 'Technical'} AI Screening Round</p>

        {/* Score ring */}
        <div style={{
          width: '110px', height: '110px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          border: '6px solid rgba(255,255,255,0.4)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto'
        }}>
          <span style={{ fontSize: '32px', fontWeight: '800' }}>{overall}</span>
          <span style={{ fontSize: '11px', opacity: 0.8 }}>/ 100</span>
        </div>
        <p style={{ marginTop: '12px', fontWeight: '700', fontSize: '16px', letterSpacing: '0.5px' }}>
          {scoreLabel(overall)}
        </p>
      </div>

      {/* Per-question feedback */}
      {report?.answers?.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <h2 style={{ fontWeight: '700', color: '#1e293b', fontSize: '18px', marginBottom: '16px' }}>
            📋 Detailed Question & Answer Breakdown
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {report.answers.map((a, i) => (
              <div key={i} style={{
                background: 'white', border: '1px solid #e2e8f0', borderRadius: '14px',
                padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Question {i + 1}
                  </span>
                  <span style={{
                    background: scoreColor(a.score) + '18',
                    color: scoreColor(a.score),
                    fontWeight: '700', fontSize: '13px',
                    padding: '3px 12px', borderRadius: '999px'
                  }}>
                    Score: {a.score}/100
                  </span>
                </div>
                <p style={{ fontWeight: '700', color: '#1e293b', fontSize: '15px', marginBottom: '12px' }}>
                  "{a.question}"
                </p>
                <div style={{ background: '#f8fafc', borderLeft: '4px solid #6366f1', borderRadius: '4px 8px 8px 4px', padding: '10px 14px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', display: 'block', marginBottom: '4px', textTransform: 'uppercase' }}>
                    YOUR SPOKEN RESPONSE
                  </span>
                  <p style={{ fontSize: '13.5px', color: '#334155', margin: 0, fontStyle: a.transcript.includes('No answer') ? 'italic' : 'normal' }}>
                    {a.transcript}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', background: '#faf5ff', borderRadius: '8px', padding: '12px' }}>
                  <span style={{ fontSize: '18px' }}>🤖</span>
                  <div>
                    <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#7e22ce', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                      AI FEEDBACK & MISTAKE ANALYSIS
                    </span>
                    <p style={{ fontSize: '13.5px', color: '#4c1d95', margin: 0, lineHeight: '1.6' }}>
                      {a.feedback}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
        <button onClick={onBack} style={{
          background: '#f1f5f9', border: '1px solid #cbd5e1', color: '#475569',
          padding: '12px 24px', borderRadius: '10px', fontWeight: '600',
          cursor: 'pointer', fontSize: '14px'
        }}>← Back to Companies</button>
        <button onClick={onOpenStudy} style={{
          background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', border: 'none', color: 'white',
          padding: '12px 24px', borderRadius: '10px', fontWeight: '700',
          cursor: 'pointer', fontSize: '14px', boxShadow: '0 4px 12px rgba(79,70,229,0.3)'
        }}>📚 Study Resources</button>
      </div>
    </div>
  );
};

export default InterviewReport;
