import React, { useState } from 'react';

function App() {
  const [victims] = useState([
    // Active Red Critical Victims
    { id: 'SOS-8012', name: 'Rahul Sharma', blood: 'O+ Positive', heartRate: 115, spO2: 88, battery: 14, priorityScore: 92, building: 'Anna Tower - Block 4 Rubble', street: 'Vepery High Road', coords: '13.0827,80.2707', distance: '8m', x: 28, y: 38, color: '#ef4444', zone: 'RED', status: 'ONLINE' },
    { id: 'SOS-9921', name: 'Ananya Verma', blood: 'B+ Positive', heartRate: 110, spO2: 89, battery: 42, priorityScore: 85, building: 'Grace Hospital Basement 1', street: 'Hunters Road', coords: '13.0829,80.2709', distance: '12m', x: 38, y: 46, color: '#ef4444', zone: 'RED', status: 'ONLINE' },
    { id: 'SOS-5541', name: 'Vignesh K.', blood: 'AB+ Positive', heartRate: 118, spO2: 86, battery: 20, priorityScore: 90, building: 'Central Market Stall 14', street: 'EVK Sampath Salai', coords: '13.0831,80.2712', distance: '18m', x: 42, y: 32, color: '#ef4444', zone: 'RED', status: 'ONLINE' },
    { id: 'SOS-1022', name: 'Rohan Mehta', blood: 'B- Negative', heartRate: 125, spO2: 83, battery: 18, priorityScore: 94, building: 'Express Mall Pillar 12', street: 'Whites Road', coords: '13.0835,80.2715', distance: '22m', x: 48, y: 25, color: '#ef4444', zone: 'RED', status: 'ONLINE' },
    { id: 'SOS-1099', name: 'Kavitha R.', blood: 'O+ Positive', heartRate: 112, spO2: 87, battery: 33, priorityScore: 88, building: 'City Center Gate 3', street: 'Peters Road', coords: '13.0820,80.2700', distance: '25m', x: 20, y: 30, color: '#ef4444', zone: 'RED', status: 'ONLINE' },

    // Battery Dead / Offline Victims
    { id: 'SOS-7711', name: 'Priya Nair', blood: 'O- Negative', heartRate: 122, spO2: 84, battery: 0, priorityScore: 98, building: 'Metro Station Gate 2 Collapse', street: 'Poonamallee High Rd', coords: '13.0828,80.2705', distance: '15m (Last Known)', x: 22, y: 55, color: '#f97316', zone: 'DEAD_BATTERY', status: 'OFFLINE', lastSeen: '4 mins ago' },
    { id: 'SOS-8802', name: 'Karthik Raja', blood: 'A+ Positive', heartRate: 130, spO2: 81, battery: 0, priorityScore: 97, building: 'Skyline Plaza Floor 2', street: 'Royapettah High Rd', coords: '13.0815,80.2690', distance: '30m (Last Known)', x: 15, y: 65, color: '#f97316', zone: 'DEAD_BATTERY', status: 'OFFLINE', lastSeen: '12 mins ago' },
    { id: 'SOS-6621', name: 'Deepa Lakshmi', blood: 'B+ Positive', heartRate: 105, spO2: 85, battery: 0, priorityScore: 91, building: 'Old Library Cellar', street: 'Luz Church Rd', coords: '13.0810,80.2685', distance: '40m (Last Known)', x: 10, y: 75, color: '#f97316', zone: 'DEAD_BATTERY', status: 'OFFLINE', lastSeen: '18 mins ago' },
    { id: 'SOS-4412', name: 'Mohamed Ashik', blood: 'AB- Negative', heartRate: 119, spO2: 82, battery: 0, priorityScore: 95, building: 'Commercial Complex B1', street: 'Mount Road', coords: '13.0805,80.2670', distance: '45m (Last Known)', x: 12, y: 82, color: '#f97316', zone: 'DEAD_BATTERY', status: 'OFFLINE', lastSeen: '25 mins ago' },
    { id: 'SOS-3390', name: 'Sridevi S.', blood: 'O+ Positive', heartRate: 128, spO2: 80, battery: 0, priorityScore: 99, building: 'Railway Colony Shed 4', street: 'Egmore High Rd', coords: '13.0800,80.2660', distance: '50m (Last Known)', x: 8, y: 88, color: '#f97316', zone: 'DEAD_BATTERY', status: 'OFFLINE', lastSeen: '32 mins ago' },

    // Stable Green Victims
    { id: 'SOS-3044', name: 'Vikram Singh', blood: 'A+ Positive', heartRate: 75, spO2: 98, battery: 65, priorityScore: 20, building: 'Nehru Stadium Open Ground', street: 'Sydenhams Road', coords: '13.0890,80.2780', distance: '45m', x: 75, y: 70, color: '#22c55e', zone: 'GREEN', status: 'ONLINE' },
    { id: 'SOS-4102', name: 'Kavita Das', blood: 'AB+ Positive', heartRate: 78, spO2: 97, battery: 80, priorityScore: 18, building: 'Community Hall Relief Shelter', street: 'Periamet Main Rd', coords: '13.0892,80.2782', distance: '50m', x: 84, y: 62, color: '#22c55e', zone: 'GREEN', status: 'ONLINE' },
    { id: 'SOS-6220', name: 'Suresh Kumar', blood: 'B+ Positive', heartRate: 82, spO2: 96, battery: 55, priorityScore: 22, building: 'St. Joseph School Camp', street: 'Choolai High Rd', coords: '13.0888,80.2778', distance: '55m', x: 68, y: 80, color: '#22c55e', zone: 'GREEN', status: 'ONLINE' },
    { id: 'SOS-5110', name: 'Ganesh M.', blood: 'O+ Positive', heartRate: 72, spO2: 99, battery: 90, priorityScore: 15, building: 'Public Park Shelter', street: 'Kilpauk Garden', coords: '13.0895,80.2785', distance: '60m', x: 88, y: 75, color: '#22c55e', zone: 'GREEN', status: 'ONLINE' },
    { id: 'SOS-9081', name: 'Meena Kumari', blood: 'A- Negative', heartRate: 76, spO2: 98, battery: 72, priorityScore: 19, building: 'Corporation School Ground', street: 'Taylor Road', coords: '13.0898,80.2790', distance: '65m', x: 92, y: 68, color: '#22c55e', zone: 'GREEN', status: 'ONLINE' }
  ]);

  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedVictim, setSelectedVictim] = useState(victims[0]);

  const filteredVictims = victims.filter(v => {
    if (activeFilter === 'RED') return v.zone === 'RED';
    if (activeFilter === 'OFFLINE') return v.status === 'OFFLINE';
    if (activeFilter === 'GREEN') return v.zone === 'GREEN';
    return true;
  });

  const activeRedCount = victims.filter(v => v.zone === 'RED').length;
  const offlineCount = victims.filter(v => v.status === 'OFFLINE').length;
  const greenCount = victims.filter(v => v.zone === 'GREEN').length;

  return (
    <div style={styles.container}>
      {/* Top Header */}
      <header style={styles.header}>
        <div>
          <div style={styles.badge}>📡 DISTRICT EMERGENCY OPERATIONS CENTER (FIRST RESPONDERS)</div>
          <h1 style={{ margin: '6px 0 0 0', fontSize: '24px', color: '#f8fafc' }}>PulseScout Local Rapid Response Tactical Dashboard</h1>
          <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#94a3b8' }}>Real-time Offline BLE Mesh Radar for Local Fire, Police & Volunteer Teams (Golden Hour Rescue)</p>
        </div>
      </header>

      {/* TACTICAL MAP CANVAS */}
      <section style={styles.mapCard}>
        <div style={styles.mapTopBar}>
          <div>
            <h3 style={{ margin: 0, fontSize: '16px', color: '#f8fafc' }}>🗺️ Tactical Radar Map with High-Contrast Pulse Vitals</h3>
            <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#94a3b8' }}>Heart Rate (BPM) prominently shown on every map pin</p>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button onClick={() => setActiveFilter('ALL')} style={{ ...styles.filterBtn, backgroundColor: activeFilter === 'ALL' ? '#3b82f6' : '#334155' }}>
              ALL ({victims.length})
            </button>
            <button onClick={() => setActiveFilter('RED')} style={{ ...styles.filterBtn, backgroundColor: activeFilter === 'RED' ? '#ef4444' : '#334155' }}>
              🔴 ACTIVE RED ({activeRedCount})
            </button>
            <button onClick={() => setActiveFilter('OFFLINE')} style={{ ...styles.filterBtn, backgroundColor: activeFilter === 'OFFLINE' ? '#f97316' : '#334155' }}>
              🪫 BATTERY DEAD ({offlineCount})
            </button>
            <button onClick={() => setActiveFilter('GREEN')} style={{ ...styles.filterBtn, backgroundColor: activeFilter === 'GREEN' ? '#22c55e' : '#334155' }}>
              🟢 GREEN STABLE ({greenCount})
            </button>
          </div>
        </div>

        {/* Tactical Canvas Radar */}
        <div style={styles.tacticalCanvas}>
          <div style={styles.radarGrid}></div>

          {/* Local Rescue Base Marker */}
          <div style={{ position: 'absolute', left: '5%', top: '10%', textAlign: 'center', zIndex: 3 }}>
            <div style={styles.hqPin}>🚒</div>
            <span style={styles.pinLabel}>Local Rescue Base Alpha</span>
          </div>

          {/* Dynamic Map Pins */}
          {filteredVictims.map((v) => (
            <div 
              key={v.id} 
              onClick={() => setSelectedVictim(v)}
              style={{
                position: 'absolute',
                left: `${v.x}%`,
                top: `${v.y}%`,
                cursor: 'pointer',
                zIndex: selectedVictim.id === v.id ? 10 : 4,
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
              }}
            >
              {v.zone === 'RED' && <div style={styles.redPulseRing}></div>}

              {/* Pin Icon */}
              <div style={{ 
                ...styles.mapPin, 
                backgroundColor: v.color,
                border: v.status === 'OFFLINE' ? '2px dashed #ffffff' : '2px solid #ffffff',
                boxShadow: selectedVictim.id === v.id ? `0 0 20px ${v.color}` : 'none'
              }}>
                {v.status === 'OFFLINE' ? '🪫' : v.zone === 'RED' ? '🚨' : '🟢'}
              </div>

              {/* Tag with HIGH CONTRAST HEART RATE */}
              <div style={{ ...styles.pinBuildingTag, borderLeft: `3px solid ${v.color}` }}>
                <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '11px' }}>{v.name}</div>
                
                {/* NEON HIGH-CONTRAST BPM BADGE */}
                <div style={{
                  backgroundColor: v.status === 'OFFLINE' ? '#ea580c' : v.zone === 'RED' ? '#dc2626' : '#16a34a',
                  border: '1px solid #ffffff',
                  color: '#ffffff',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: '900',
                  marginTop: '3px',
                  display: 'inline-block',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.5)'
                }}>
                  ❤️ {v.heartRate} BPM {v.status === 'OFFLINE' ? '(Cached)' : ''}
                </div>
                <div style={{ color: '#38bdf8', fontSize: '9px', marginTop: '2px', fontWeight: 'bold' }}>🏢 {v.building}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Victim Focus Banner */}
        {selectedVictim && (
          <div style={{ ...styles.victimNavBanner, borderColor: selectedVictim.color }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: 'bold', color: selectedVictim.color }}>
                  {selectedVictim.status === 'OFFLINE' ? '🪫 DEVICE BATTERY DEAD / OFFLINE' : selectedVictim.zone === 'RED' ? '🔴 CRITICAL ACTIVE VICTIM' : '🟢 STABLE VICTIM'}
                </span>
                <span style={styles.idTag}>{selectedVictim.id}</span>
              </div>
              <h4 style={{ margin: '4px 0 0 0', fontSize: '18px', color: '#f8fafc' }}>
                {selectedVictim.name} ({selectedVictim.blood})
              </h4>
              
              {/* Prominent Vitals Display */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px', flexWrap: 'wrap' }}>
                <div style={styles.vitalsBoxRed}>
                  <div style={{ fontSize: '10px', color: '#fee2e2', fontWeight: 'bold' }}>HEART RATE (BPM)</div>
                  <div style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff' }}>❤️ {selectedVictim.heartRate} BPM</div>
                </div>

                <div style={styles.vitalsBoxBlue}>
                  <div style={{ fontSize: '10px', color: '#e0f2fe', fontWeight: 'bold' }}>BLOOD OXYGEN (SpO2)</div>
                  <div style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff' }}>🫁 {selectedVictim.spO2}% SpO2</div>
                </div>

                {selectedVictim.status === 'OFFLINE' && (
                  <div style={styles.offlineTimeBox}>
                    <div style={{ fontSize: '10px', color: '#fde047', fontWeight: 'bold' }}>BATTERY & LAST SEEN</div>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#fde047' }}>🪫 0% Battery ({selectedVictim.lastSeen})</div>
                  </div>
                )}
              </div>

              <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#38bdf8', fontWeight: 'bold' }}>
                🏢 Location: {selectedVictim.building} ({selectedVictim.street})
              </p>
            </div>

            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${selectedVictim.coords}`}
              target="_blank" 
              rel="noreferrer"
              style={{
                ...styles.directRouteBtn,
                backgroundColor: selectedVictim.color
              }}
            >
              📍 NAVIGATE TO LOCATION
            </a>
          </div>
        )}
      </section>

      {/* SECTION 1: ACTIVE LIVE AI TRIAGE LIST */}
      <h3 style={{ color: '#f8fafc', marginBottom: '12px', fontSize: '18px' }}>
        📋 Active AI Triage Priority List ({victims.filter(v => v.status === 'ONLINE').length} Signals)
      </h3>

      <div style={{ display: 'grid', gap: '10px', marginBottom: '28px' }}>
        {victims.filter(v => v.status === 'ONLINE').sort((a,b) => b.priorityScore - a.priorityScore).map((v) => (
          <div key={v.id} onClick={() => setSelectedVictim(v)} style={{
            ...styles.victimCard,
            borderLeftColor: v.color,
            backgroundColor: v.id === selectedVictim.id ? 'rgba(56, 189, 248, 0.1)' : '#1e293b'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '16px', color: '#f8fafc' }}>{v.name}</h3>
                  <span style={styles.idTag}>{v.id}</span>
                  <span style={styles.bloodTag}>{v.blood}</span>
                </div>
                <div style={{ fontSize: '12px', color: '#38bdf8', marginTop: '4px', fontWeight: 'bold' }}>🏢 {v.building}</div>
              </div>

              {/* Bold High-Visibility Heart Rate Column */}
              <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  backgroundColor: v.zone === 'RED' ? '#b91c1c' : '#15803d',
                  border: '1px solid #ffffff',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
                }}>
                  <div style={{ fontSize: '9px', color: '#f8fafc', fontWeight: 'bold' }}>HEART RATE</div>
                  <strong style={{ fontSize: '18px', color: '#ffffff', fontWeight: '900' }}>❤️ {v.heartRate} BPM</strong>
                </div>

                <div>
                  <span style={{ 
                    backgroundColor: v.priorityScore > 80 ? '#ef4444' : '#22c55e', 
                    color: '#fff', 
                    padding: '6px 12px', 
                    borderRadius: '12px', 
                    fontSize: '12px', 
                    fontWeight: 'bold',
                    display: 'block'
                  }}>
                    AI Score: {v.priorityScore}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION 2: SEPARATE BATTERY DEAD / LAST KNOWN TELEMETRY SECTION */}
      <div style={styles.deadBatterySectionHeader}>
        <h3 style={{ margin: 0, color: '#f97316', fontSize: '18px' }}>
          🪫 Battery Dead & Offline Devices ({offlineCount} Cached Mesh Signals)
        </h3>
        <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#fdba74' }}>
          Devices powered off or zero battery. Displays last recorded Heart Rate & persistent location.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '10px' }}>
        {victims.filter(v => v.status === 'OFFLINE').sort((a,b) => b.priorityScore - a.priorityScore).map((v) => (
          <div key={v.id} onClick={() => setSelectedVictim(v)} style={{
            ...styles.victimCard,
            borderLeftColor: '#f97316',
            backgroundColor: v.id === selectedVictim.id ? 'rgba(249, 115, 22, 0.15)' : '#1a100c'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <h3 style={{ margin: 0, fontSize: '16px', color: '#f8fafc' }}>{v.name}</h3>
                  <span style={styles.idTag}>{v.id}</span>
                  <span style={styles.bloodTag}>{v.blood}</span>
                  <span style={styles.offlinePill}>🪫 0% Battery ({v.lastSeen})</span>
                </div>
                <div style={{ fontSize: '12px', color: '#fb923c', marginTop: '4px', fontWeight: 'bold' }}>
                  📍 Last Known Location: {v.building} ({v.street})
                </div>
              </div>

              {/* Last Recorded Heart Rate Badge */}
              <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  backgroundColor: '#c2410c',
                  border: '1px solid #ffffff',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
                }}>
                  <div style={{ fontSize: '9px', color: '#fde047', fontWeight: 'bold' }}>LAST RECORDED</div>
                  <strong style={{ fontSize: '18px', color: '#ffffff', fontWeight: '900' }}>❤️ {v.heartRate} BPM</strong>
                </div>

                <div>
                  <span style={{ 
                    backgroundColor: '#ea580c', 
                    color: '#fff', 
                    padding: '6px 12px', 
                    borderRadius: '12px', 
                    fontSize: '12px', 
                    fontWeight: 'bold',
                    display: 'block'
                  }}>
                    AI Score: {v.priorityScore}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pinPulse {
          0% { transform: scale(0.8); opacity: 0.9; }
          100% { transform: scale(2.4); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: { backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', padding: '20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  header: { borderBottom: '1px solid #334155', paddingBottom: '14px', marginBottom: '16px' },
  badge: { display: 'inline-block', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold' },
  mapCard: { backgroundColor: '#1e293b', borderRadius: '16px', padding: '16px', marginBottom: '20px', border: '1px solid #334155' },
  mapTopBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' },
  filterBtn: { color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' },
  tacticalCanvas: { position: 'relative', height: '360px', backgroundColor: '#090d16', borderRadius: '12px', border: '1px solid #334155', overflow: 'hidden' },
  radarGrid: { position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 1px, transparent 1px)', backgroundSize: '24px 24px' },
  hqPin: { fontSize: '22px', filter: 'drop-shadow(0 0 8px #38bdf8)' },
  mapPin: { width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#fff', position: 'relative', zIndex: 2 },
  redPulseRing: { position: 'absolute', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(239, 68, 68, 0.6)', animation: 'pinPulse 1.8s infinite ease-out' },
  pinLabel: { fontSize: '10px', fontWeight: 'bold', color: '#f8fafc', backgroundColor: 'rgba(15, 23, 42, 0.85)', padding: '2px 6px', borderRadius: '4px', marginTop: '4px', whiteSpace: 'nowrap' },
  pinBuildingTag: { backgroundColor: 'rgba(15, 23, 42, 0.95)', padding: '6px 10px', borderRadius: '8px', marginTop: '4px', whiteSpace: 'nowrap', border: '1px solid #334155' },
  victimNavBanner: { marginTop: '14px', backgroundColor: '#0f172a', borderRadius: '12px', padding: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '2px solid #334155', flexWrap: 'wrap', gap: '10px' },
  vitalsBoxRed: { backgroundColor: '#b91c1c', border: '1px solid #ef4444', padding: '8px 14px', borderRadius: '8px' },
  vitalsBoxBlue: { backgroundColor: '#0284c7', border: '1px solid #38bdf8', padding: '8px 14px', borderRadius: '8px' },
  offlineTimeBox: { backgroundColor: 'rgba(249, 115, 22, 0.2)', border: '1px solid #f97316', padding: '8px 14px', borderRadius: '8px' },
  directRouteBtn: { color: '#fff', textDecoration: 'none', padding: '10px 16px', borderRadius: '8px', fontWeight: 'bold', fontSize: '12px' },
  victimCard: { padding: '14px', borderRadius: '12px', borderLeftWidth: '5px', borderLeftStyle: 'solid', border: '1px solid #334155', cursor: 'pointer' },
  idTag: { backgroundColor: '#334155', color: '#cbd5e1', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' },
  bloodTag: { backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' },
  offlinePill: { backgroundColor: 'rgba(249, 115, 22, 0.2)', color: '#fdba74', border: '1px solid #f97316', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold' },
  deadBatterySectionHeader: { backgroundColor: 'rgba(249, 115, 22, 0.1)', border: '1px solid #f97316', padding: '12px 16px', borderRadius: '12px', marginBottom: '12px' }
};

export default App;