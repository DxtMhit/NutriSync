import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DashboardSection = () => {
  const [activeSubTab, setActiveSubTab] = useState('biomarkers');
  const [biomarkers, setBiomarkers] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [newSymptomName, setNewSymptomName] = useState('Fatigue');
  const [symptomIntensity, setSymptomIntensity] = useState(3);
  const [uploadState, setUploadState] = useState({ loading: false, status: '', error: '' });
  const [optimizationReport, setOptimizationReport] = useState('');
  const [optLoading, setOptLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  // Common symptoms list
  const commonSymptoms = [
    'Fatigue', 'Muscle Spasms', 'Brain Fog', 'Headaches', 
    'Anxiety', 'Insomnia', 'Joint Pain', 'Muscle Weakness',
    'Dry Skin', 'Hair Loss', 'Cold Intolerance'
  ];

  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setLoadingData(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const user_id = session.user.id;

      // 1. Fetch biomarkers
      const { data: bioData, error: bioErr } = await supabase
        .from('biomarkers')
        .select('*')
        .eq('user_id', user_id)
        .order('test_date', { ascending: true });

      if (bioErr) throw bioErr;
      setBiomarkers(bioData || []);

      // 2. Fetch symptoms
      const { data: symData, error: symErr } = await supabase
        .from('symptom_logs')
        .select('*')
        .eq('user_id', user_id)
        .order('created_at', { ascending: false });

      if (symErr) throw symErr;
      setSymptoms(symData || []);

    } catch (err) {
      console.error('Error loading dashboard data:', err);
    } finally {
      setLoadingData(false);
    }
  };

  // Add a logged symptom
  const handleAddSymptom = async (e) => {
    e.preventDefault();
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { error } = await supabase.from('symptom_logs').insert({
        user_id: session.user.id,
        name: newSymptomName,
        intensity: parseInt(symptomIntensity)
      });

      if (error) throw error;
      fetchUserData();
    } catch (err) {
      alert(`Error logging symptom: ${err.message}`);
    }
  };

  // Delete a logged symptom
  const handleDeleteSymptom = async (id) => {
    try {
      const { error } = await supabase.from('symptom_logs').delete().eq('id', id);
      if (error) throw error;
      fetchUserData();
    } catch (err) {
      alert(`Error deleting symptom: ${err.message}`);
    }
  };

  // Upload lab report parser
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadState({ loading: true, status: 'Uploading lab report...', error: '' });

    const formData = new FormData();
    formData.append('file', file);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error('Session missing. Please log in.');

      setUploadState(prev => ({ ...prev, status: 'AI Extracting Biomarkers (OCR & Gemini)...' }));

      const response = await fetch(`${backendUrl}/api/parse-lab-report`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`
        },
        body: formData
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.detail || 'Parser error.');
      }

      const data = await response.json();
      setUploadState({
        loading: false,
        status: `Success! Successfully extracted ${data.saved} biomarkers!`,
        error: ''
      });
      fetchUserData();
    } catch (err) {
      setUploadState({ loading: false, status: '', error: err.message || 'File upload failed.' });
    }
  };

  // Supplement optimization report generator
  const handleGenerateReport = async () => {
    setOptLoading(true);
    setOptimizationReport('');
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error('Session missing. Please log in.');

      const response = await fetch(`${backendUrl}/api/optimize-supplements`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`
        }
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.detail || 'Optimization failed.');
      }

      const data = await response.json();
      setOptimizationReport(data.report);
    } catch (err) {
      setOptimizationReport(`<div style="color: var(--rose2)">Failed to compile report: ${err.message}</div>`);
    } finally {
      setOptLoading(false);
    }
  };

  // Group biomarkers by name for charting
  const getChartData = () => {
    const groups = {};
    biomarkers.forEach(b => {
      if (!groups[b.name]) groups[b.name] = [];
      groups[b.name].push({
        date: new Date(b.test_date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
        value: parseFloat(b.value),
        unit: b.unit
      });
    });
    return groups;
  };

  const chartDataGroups = getChartData();

  if (loadingData) {
    return (
      <div style={{ textAlign: 'center', padding: '80px', color: 'var(--text3)', fontFamily: 'DM Mono, monospace' }}>
        Loading health dashboard...
      </div>
    );
  }

  return (
    <div className="section-inner" style={{ minHeight: '600px' }}>
      {/* Sub Tabs Navigation */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', marginBottom: '24px', gap: '8px' }}>
        <button
          onClick={() => setActiveSubTab('biomarkers')}
          style={{
            padding: '12px 18px',
            border: 'none',
            background: 'none',
            color: activeSubTab === 'biomarkers' ? 'var(--accent)' : 'var(--text3)',
            borderBottom: activeSubTab === 'biomarkers' ? '2px solid var(--accent)' : '2px solid transparent',
            cursor: 'pointer',
            fontSize: '13px',
            fontFamily: 'DM Mono, monospace',
            textTransform: 'uppercase'
          }}
        >
          📈 Lab Biomarkers
        </button>
        <button
          onClick={() => setActiveSubTab('symptoms')}
          style={{
            padding: '12px 18px',
            border: 'none',
            background: 'none',
            color: activeSubTab === 'symptoms' ? 'var(--accent)' : 'var(--text3)',
            borderBottom: activeSubTab === 'symptoms' ? '2px solid var(--accent)' : '2px solid transparent',
            cursor: 'pointer',
            fontSize: '13px',
            fontFamily: 'DM Mono, monospace',
            textTransform: 'uppercase'
          }}
        >
          🚦 Symptoms Log
        </button>
        <button
          onClick={() => setActiveSubTab('optimize')}
          style={{
            padding: '12px 18px',
            border: 'none',
            background: 'none',
            color: activeSubTab === 'optimize' ? 'var(--accent)' : 'var(--text3)',
            borderBottom: activeSubTab === 'optimize' ? '2px solid var(--accent)' : '2px solid transparent',
            cursor: 'pointer',
            fontSize: '13px',
            fontFamily: 'DM Mono, monospace',
            textTransform: 'uppercase'
          }}
        >
          🔬 Supplement Optimizer
        </button>
      </div>

      {/* TAB 1: BIOMARKERS */}
      {activeSubTab === 'biomarkers' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Lab Upload Box */}
          <div className="cluster-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderStyle: 'dashed', borderWidth: '1px' }}>
            <span style={{ fontSize: '32px', marginBottom: '10px' }}>📄</span>
            <div style={{ fontWeight: '600', fontSize: '15px', color: 'var(--heading)' }}>AI Lab Report PDF/Image Parser</div>
            <p style={{ fontSize: '12px', color: 'var(--text3)', textAlign: 'center', marginTop: '4px', maxWidth: '400px' }}>
              Upload your blood test reports. Gemini will run OCR to extract vitamins, minerals, thyroid indicators, and save them automatically.
            </p>
            <div style={{ marginTop: '16px' }}>
              <label
                style={{
                  padding: '8px 16px',
                  background: 'var(--surface2)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  color: 'var(--accent)',
                  fontSize: '13px',
                  fontWeight: '600'
                }}
              >
                Choose Lab Report File
                <input type="file" accept="image/*,application/pdf" onChange={handleFileUpload} style={{ display: 'none' }} />
              </label>
            </div>
            {uploadState.loading && <div style={{ marginTop: '12px', fontSize: '12.5px', color: 'var(--blue2)' }}>{uploadState.status}</div>}
            {uploadState.status && !uploadState.loading && <div style={{ marginTop: '12px', fontSize: '12.5px', color: 'var(--accent)' }}>{uploadState.status}</div>}
            {uploadState.error && <div style={{ marginTop: '12px', fontSize: '12.5px', color: 'var(--rose2)' }}>{uploadState.error}</div>}
          </div>

          {/* Biomarkers Charts */}
          {Object.keys(chartDataGroups).length === 0 ? (
            <div className="bookmarks-empty" style={{ padding: '40px' }}>
              No biomarker records found. Log your lab reports above to generate historical tracking charts.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
              {Object.keys(chartDataGroups).map((key) => {
                const groupData = chartDataGroups[key];
                const latest = groupData[groupData.length - 1];
                return (
                  <div className="cluster-card" key={key} style={{ padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', alignItems: 'flex-start' }}>
                      <div>
                        <div style={{ fontWeight: '700', fontFamily: 'Fraunces, serif', fontSize: '16px', color: 'var(--heading)' }}>{key}</div>
                        <div style={{ fontSize: '11px', color: 'var(--text3)' }}>Biomarker History</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--accent)' }}>
                          {latest.value} <span style={{ fontSize: '11px', fontWeight: '400', color: 'var(--text2)' }}>{latest.unit}</span>
                        </div>
                        <span style={{ fontSize: '9px', padding: '2px 6px', background: 'var(--surface2)', borderRadius: '4px', color: 'var(--text3)', fontFamily: 'DM Mono, monospace' }}>
                          Latest: {latest.date}
                        </span>
                      </div>
                    </div>
                    {groupData.length > 1 ? (
                      <div style={{ width: '100%', height: '120px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={groupData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                            <XAxis dataKey="date" tick={{ fill: 'var(--text3)', fontSize: 9 }} />
                            <YAxis hide={true} domain={['auto', 'auto']} />
                            <Tooltip
                              contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', fontSize: '10px' }}
                              labelStyle={{ color: 'var(--heading)' }}
                            />
                            <Line type="monotone" dataKey="value" stroke="var(--accent)" strokeWidth={2} dot={{ r: 3 }} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    ) : (
                      <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: 'var(--text3)', background: 'rgba(255,255,255,0.01)', borderRadius: '6px' }}>
                        Single data point recorded. Upload more reports to view historical trends.
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: SYMPTOMS LOG */}
      {activeSubTab === 'symptoms' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '30px' }}>
          {/* Add Symptom Box */}
          <div className="cluster-card" style={{ padding: '24px' }}>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '18px', color: 'var(--heading)', marginBottom: '16px' }}>Log a Symptom</h3>
            <form onSubmit={handleAddSymptom} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', fontFamily: 'DM Mono, monospace', color: 'var(--text3)', marginBottom: '6px' }}>
                  Select Symptom
                </label>
                <select
                  value={newSymptomName}
                  onChange={(e) => setNewSymptomName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface2)',
                    color: 'var(--text)',
                    fontSize: '13px'
                  }}
                >
                  {commonSymptoms.map(sym => (
                    <option key={sym} value={sym}>{sym}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', fontFamily: 'DM Mono, monospace', color: 'var(--text3)', marginBottom: '6px' }}>
                  Intensity ({symptomIntensity}/5)
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={symptomIntensity}
                  onChange={(e) => setSymptomIntensity(e.target.value)}
                  style={{ width: '100%', accentColor: 'var(--accent)', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text3)', marginTop: '4px' }}>
                  <span>Mild</span>
                  <span>Severe</span>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  padding: '10px',
                  borderRadius: '6px',
                  border: 'none',
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}
              >
                Log Symptom
              </button>
            </form>
          </div>

          {/* Current Symptoms List */}
          <div className="cluster-card" style={{ padding: '24px' }}>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '18px', color: 'var(--heading)', marginBottom: '16px' }}>Active Symptoms Log</h3>
            {symptoms.length === 0 ? (
              <div className="bookmarks-empty">No symptoms logged. Log your health symptoms to cross-reference cofactor deficiencies.</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {symptoms.map(sym => (
                  <div key={sym.id} style={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--heading)' }}>{sym.name}</div>
                      <span style={{ fontSize: '10px', color: 'var(--text3)' }}>Logged on: {new Date(sym.logged_at).toLocaleDateString()}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <span style={{ fontSize: '12px', padding: '2px 8px', borderRadius: '12px', background: sym.intensity >= 4 ? 'rgba(212,93,93,0.12)' : 'rgba(93,202,126,0.1)', color: sym.intensity >= 4 ? 'var(--rose2)' : 'var(--accent)' }}>
                        Level {sym.intensity}/5
                      </span>
                      <button
                        onClick={() => handleDeleteSymptom(sym.id)}
                        style={{ border: 'none', background: 'none', color: 'var(--rose2)', cursor: 'pointer', fontSize: '13px' }}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: SUPPLEMENT OPTIMIZATION REPORT */}
      {activeSubTab === 'optimize' && (
        <div className="cluster-card" style={{ padding: '28px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '22px', color: 'var(--heading)' }}>AI Supplement Optimizer</h3>
            <p style={{ fontSize: '12.5px', color: 'var(--text3)', marginTop: '4px', maxWidth: '600px', margin: '4px auto 0' }}>
              Our optimization rules evaluate your recent lab metrics and symptom indicators to generate a complete biochemical synergy protocol.
            </p>
            <button
              onClick={handleGenerateReport}
              disabled={optLoading}
              style={{
                marginTop: '16px',
                padding: '10px 24px',
                borderRadius: '6px',
                border: 'none',
                background: 'var(--accent)',
                color: 'var(--bg)',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              {optLoading ? 'Generating Analysis Report...' : 'Generate Optimization Report'}
            </button>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
            {optLoading ? (
              <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text3)', fontFamily: 'DM Mono, monospace' }}>
                Analyzing blood tests and symptom mappings...
              </div>
            ) : optimizationReport ? (
              <div
                className="citations-modal-body"
                style={{ maxWidth: 'none', color: 'var(--text)' }}
                dangerouslySetInnerHTML={{ __html: optimizationReport }}
              />
            ) : (
              <div className="bookmarks-empty" style={{ padding: '40px' }}>
                Click the button above to run the rules analyzer and generate your custom report.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardSection;
