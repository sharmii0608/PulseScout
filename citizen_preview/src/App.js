import React, { useState, useEffect } from 'react';

function App() {
  const [onboarded, setOnboarded] = useState(false);
  const [name, setName] = useState('Rahul Sharma');
  const [bloodGroup, setBloodGroup] = useState('O+ Positive');
  const [autoBluetooth, setAutoBluetooth] = useState(true);
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [heartRate, setHeartRate] = useState(115);
  const [spO2, setSpO2] = useState(88);

  // 🚨 Pre-Disaster Alert & Escape Map View State
  const [showEscapeMap, setShowEscapeMap] = useState(false);
  const [earlyAlert, setEarlyAlert] = useState({
    active: true,
    title: '⚠️ EARLY EARTHQUAKE WARNING (MAGNITUDE 6.8)',
    message: 'TREMORS EXPECTED IN 5 MINS! Move away from tall structures immediately.',
    time: 'National Disaster Centre Alert • Just Now'
  });

  useEffect(() => {
    if (!isBroadcasting) return;
    const interval = setInterval(() => {
      setHeartRate(108 + Math.floor(Math.random() * 12));
      setSpO2(86 + Math.floor(Math.random() * 4));
    }, 2000);
    return () => clearInterval(interval);
  }, [isBroadcasting]);

  const handleOnboardSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter citizen name!");
      return;
    }
    if (autoBluetooth) {
      setShowPermissionModal(true);
    } else {
      setOnboarded(true);
      setIsBroadcasting(true);
    }
  };

  const grantBluetoothPermission = () => {
    setShowPermissionModal(false);
    setOnboarded(true);
    setIsBroadcasting(true);
  };

  if (showPermissionModal) {
    return (
      <div style={styles.fullscreenModal}>
        <div style={styles.permissionBox}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>📱</div>
          <h3 style={{ margin: '0 0 8px 0', color: '#f8fafc', fontSize: '20px' }}>System Permission</h3>
          <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '24px' }}>
            <strong>"PulseScout"</strong> requires authorization to automatically turn <strong>ON Bluetooth Low Energy (BLE)</strong> during critical distress events.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={grantBluetoothPermission} style={styles.allowBtn}>ALLOW & TURN ON</button>
            <button onClick={() => { setShowPermissionModal(false); setOnboarded(true); setIsBroadcasting(true); }} style={styles.denyBtn}>DENY</button>
          </div>
        </div>
      </div>
    );
  }

  // 🗺️ ANIMATED ESCAPE DIRECTION MAP SCREEN FOR CITIZEN
  if (showEscapeMap) {
    return (
      <div style={styles.container}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <span style={styles.logoBadge}>🚨 EMERGENCY EVACUATION ROUTE</span>
            <h2 style={{ margin: '4px 0 0 0', fontSize: '20px', color: '#f8fafc' }}>Live Escape Direction</h2>
          </div>
          <button onClick={() => setShowEscapeMap(false)} style={styles.editProfileBtn}>✕ Close Map</button>
        </header>

        {/* Animated Escape Radar Box */}
        <div style={styles.escapeCanvas}>
          <div style={styles.radarGrid}></div>

          {/* User Center Position */}
          <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 5 }}>
            <div style={styles.userPin}>📍 YOU ARE HERE</div>
            <div style={{ fontSize: '10px', color: '#cbd5e1', marginTop: '2px' }}>Block 4 Building</div>
          </div>

          {/* 🔴 RED HAZARD DIRECTION (DO NOT GO) */}
          <div style={{ position: 'absolute', right: '10%', top: '20%', textAlign: 'center' }}>
            <div style={{ ...styles.directionBadge, backgroundColor: '#ef4444', border: '2px solid #f87171' }}>
              ⛔ DANGER ZONE (EAST)
            </div>
            <div style={{ fontSize: '10px', color: '#fca5a5', marginTop: '4px' }}>
              Building Collapse Risk & High Traffic
            </div>
          </div>

          {/* 🟢 GREEN SAFE ESCAPE DIRECTION (GO HERE) */}
          <div style={{ position: 'absolute', left: '10%', bottom: '20%', textAlign: 'center' }}>
            <div style={{ ...styles.directionBadge, backgroundColor: '#22c55e', border: '2px solid #4ade80', animation: 'greenPulse 1.5s infinite' }}>
              ✅ SAFE ROUTE (WEST 🧭)
            </div>
            <div style={{ fontSize: '10px', color: '#86efac', marginTop: '4px' }}>
              Open Stadium Ground (200m)
            </div>
          </div>
        </div>

        {/* Action Guidance Card */}
        <div style={styles.guidanceCard}>
          <h4 style={{ margin: 0, color: '#4ade80', fontSize: '15px' }}>🟢 Recommended Action: Move WEST</h4>
          <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#cbd5e1', lineHeight: '1.4' }}>
            Follow the <strong>Green Safe Corridor</strong> towards Nehru Stadium Ground. Avoid Eastern high-rise structures. Your BLE SOS beacon remains active in background.
          </p>
        </div>

        <button onClick={() => setShowEscapeMap(false)} style={styles.primaryActionBtn}>
          BACK TO SOS BEACON DASHBOARD
        </button>

        <style>{`
          @keyframes greenPulse {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
            70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
          }
        `}</style>
      </div>
    );
  }

  if (!onboarded) {
    return (
      <div style={styles.container}>
        {/* 🚨 PRE-DISASTER ALERT BANNER ON SETUP PAGE */}
        {earlyAlert.active && (
          <div style={styles.earlyAlertCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#facc15', letterSpacing: '0.5px' }}>
                {earlyAlert.title}
              </div>
              <button onClick={() => setEarlyAlert({ ...earlyAlert, active: false })} style={styles.dismissBtn}>✕</button>
            </div>
            <p style={{ margin: '6px 0', fontSize: '12px', color: '#fff', lineHeight: '1.4' }}>
              {earlyAlert.message}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
              <span style={{ fontSize: '10px', color: '#cbd5e1' }}>{earlyAlert.time}</span>
              <button onClick={() => { setOnboarded(true); setIsBroadcasting(true); setShowEscapeMap(true); }} style={styles.openMapBtn}>
                🗺️ VIEW SAFE ESCAPE DIRECTION
              </button>
            </div>
          </div>
        )}

        <header style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={styles.logoBadge}>📡 PULSESCOUT MOBILE</div>
          <h1 style={styles.mainTitle}>Disaster SOS Setup</h1>
          <p style={styles.subTitle}>Offline BLE Beacon & Vitals Relay System</p>
        </header>

        <form onSubmit={handleOnboardSubmit} style={styles.cardForm}>
          <div>
            <label style={styles.label}>Full Name / Victim ID</label>
            <input 
              type="text" 
              placeholder="e.g. Rahul Sharma"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              style={styles.inputField}
            />
          </div>

          <div>
            <label style={styles.label}>Blood Group & Medical Condition</label>
            <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} style={styles.inputField}>
              <option value="O+ Positive">O+ Positive</option>
              <option value="A+ Positive">A+ Positive</option>
              <option value="B+ Positive">B+ Positive</option>
              <option value="AB+ Positive">AB+ Positive</option>
              <option value="Diabetic / Asthma Alert">Diabetic / Asthma Alert</option>
            </select>
          </div>

          <div style={styles.permissionToggleCard}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#38bdf8' }}>Auto-Enable Bluetooth SOS</div>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Auto turn ON BLE radio in emergencies</div>
            </div>
            <input 
              type="checkbox" 
              checked={autoBluetooth} 
              onChange={(e) => setAutoBluetooth(e.target.checked)} 
              style={{ width: '22px', height: '22px', cursor: 'pointer', accentColor: '#38bdf8' }}
            />
          </div>

          <button type="submit" style={styles.primaryActionBtn}>
            ACTIVATE DISASTER BEACON 🚀
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* 🚨 PRE-DISASTER ALERT BANNER ON LIVE DASHBOARD */}
      {earlyAlert.active && (
        <div style={styles.earlyAlertCard}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#facc15' }}>
              {earlyAlert.title}
            </div>
            <button onClick={() => setEarlyAlert({ ...earlyAlert, active: false })} style={styles.dismissBtn}>✕</button>
          </div>
          <p style={{ margin: '6px 0', fontSize: '12px', color: '#fff', lineHeight: '1.4' }}>
            {earlyAlert.message}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
            <span style={{ fontSize: '10px', color: '#cbd5e1' }}>{earlyAlert.time}</span>
            <button onClick={() => setShowEscapeMap(true)} style={styles.openMapBtn}>
              🗺️ VIEW SAFE ESCAPE DIRECTION
            </button>
          </div>
        </div>
      )}

      {/* Top Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '20px', color: '#f8fafc' }}>{name}</h2>
          <span style={styles.bloodTag}>{bloodGroup}</span>
        </div>
        <button onClick={() => setOnboarded(false)} style={styles.editProfileBtn}>✏️ Settings</button>
      </header>

      {/* Main SOS Beacon Visual */}
      <div style={{ 
        ...styles.beaconVisualCard, 
        backgroundColor: isBroadcasting ? 'rgba(239, 68, 68, 0.15)' : '#1e293b', 
        borderColor: isBroadcasting ? '#ef4444' : '#334155' 
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: '38px', marginBottom: '6px' }}>
            {isBroadcasting ? '📡' : '⏸️'}
          </div>
          <div style={{ fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: isBroadcasting ? '#fca5a5' : '#94a3b8', fontWeight: 'bold' }}>
            {isBroadcasting ? '● BLE SOS BROADCASTING ACTIVE' : '○ BEACON PAUSED'}
          </div>
          <h1 style={{ fontSize: '24px', margin: '6px 0', color: isBroadcasting ? '#fee2e2' : '#94a3b8' }}>
            {isBroadcasting ? 'TRANSMITTING' : 'STANDBY MODE'}
          </h1>
          <p style={{ fontSize: '12px', color: '#cbd5e1', maxWidth: '280px', margin: '0 auto 10px auto', lineHeight: '1.4' }}>
            {isBroadcasting 
              ? 'Broadcasting Pulse, SpO2 & Location over Bluetooth Mesh.' 
              : 'Click start below to broadcast emergency beacon.'}
          </p>

          {autoBluetooth && isBroadcasting && (
            <div style={styles.autoBtTag}>
              ⚡ Bluetooth Radio Auto-Enabled by System Permission
            </div>
          )}
        </div>
      </div>

      {/* Vitals Live Gauges */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div style={styles.vitalBox}>
          <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 'bold' }}>HEART RATE</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ef4444', margin: '2px 0' }}>
            {isBroadcasting ? `${heartRate} BPM` : '--'}
          </div>
          <div style={{ fontSize: '10px', color: '#f87171' }}>{isBroadcasting ? '❤️ Pulse Active' : 'Off'}</div>
        </div>

        <div style={styles.vitalBox}>
          <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 'bold' }}>SPO2 (OXYGEN)</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#38bdf8', margin: '2px 0' }}>
            {isBroadcasting ? `${spO2}%` : '--'}
          </div>
          <div style={{ fontSize: '10px', color: '#38bdf8' }}>{isBroadcasting ? '🫁 Normal Range' : 'Off'}</div>
        </div>
      </div>

      {/* Main Trigger Toggle Button */}
      <button 
        onClick={() => setIsBroadcasting(!isBroadcasting)}
        style={{ 
          ...styles.mainToggleBtn, 
          backgroundColor: isBroadcasting ? '#2563eb' : '#dc2626'
        }}
      >
        {isBroadcasting ? '⏸ STOP SOS BEACON' : '▶ START SOS BEACON'}
      </button>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#090d16',
    color: '#fff',
    minHeight: '100vh',
    padding: '16px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    maxWidth: '420px',
    margin: '0 auto',
    boxSizing: 'border-box'
  },
  earlyAlertCard: {
    backgroundColor: 'rgba(220, 38, 38, 0.25)',
    border: '2px solid #ef4444',
    borderRadius: '14px',
    padding: '12px 14px',
    marginBottom: '16px',
    boxShadow: '0 6px 16px rgba(239, 68, 68, 0.3)'
  },
  dismissBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#cbd5e1',
    cursor: 'pointer',
    fontSize: '14px'
  },
  openMapBtn: {
    backgroundColor: '#facc15',
    color: '#000',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '11px',
    cursor: 'pointer'
  },
  escapeCanvas: {
    position: 'relative',
    height: '280px',
    backgroundColor: '#0f172a',
    borderRadius: '16px',
    border: '1px solid #334155',
    marginBottom: '16px',
    overflow: 'hidden'
  },
  radarGrid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 1px, transparent 1px)',
    backgroundSize: '20px 20px'
  },
  userPin: {
    backgroundColor: '#38bdf8',
    color: '#000',
    padding: '6px 12px',
    borderRadius: '20px',
    fontWeight: 'bold',
    fontSize: '11px',
    boxShadow: '0 0 12px #38bdf8'
  },
  directionBadge: {
    color: '#fff',
    padding: '6px 10px',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '11px'
  },
  guidanceCard: {
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '12px',
    padding: '14px',
    marginBottom: '16px'
  },
  logoBadge: {
    display: 'inline-block',
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    color: '#ef4444',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: 'bold'
  },
  mainTitle: {
    margin: '6px 0 2px 0',
    fontSize: '24px',
    color: '#f8fafc'
  },
  subTitle: {
    margin: 0,
    fontSize: '12px',
    color: '#94a3b8'
  },
  cardForm: {
    backgroundColor: '#1e293b',
    padding: '20px',
    borderRadius: '18px',
    display: 'grid',
    gap: '16px',
    border: '1px solid #334155'
  },
  label: {
    fontSize: '11px',
    color: '#cbd5e1',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  inputField: {
    width: '100%',
    padding: '10px',
    marginTop: '4px',
    borderRadius: '8px',
    border: '1px solid #334155',
    backgroundColor: '#0f172a',
    color: '#fff',
    boxSizing: 'border-box',
    fontSize: '13px'
  },
  permissionToggleCard: {
    backgroundColor: '#0f172a',
    padding: '12px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justify: 'space-between',
    border: '1px solid #334155'
  },
  primaryActionBtn: {
    backgroundColor: '#ef4444',
    color: '#fff',
    border: 'none',
    padding: '14px',
    borderRadius: '10px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    width: '100%'
  },
  bloodTag: {
    backgroundColor: '#334155',
    color: '#38bdf8',
    padding: '2px 8px',
    borderRadius: '6px',
    fontSize: '11px',
    fontWeight: 'bold'
  },
  editProfileBtn: {
    backgroundColor: '#1e293b',
    color: '#cbd5e1',
    border: '1px solid #334155',
    padding: '6px 10px',
    borderRadius: '8px',
    fontSize: '11px',
    cursor: 'pointer'
  },
  beaconVisualCard: {
    position: 'relative',
    borderRadius: '20px',
    padding: '20px 16px',
    textAlign: 'center',
    marginBottom: '14px',
    borderWidth: '2px',
    borderStyle: 'solid'
  },
  autoBtTag: {
    fontSize: '10px',
    backgroundColor: '#0f172a',
    padding: '6px 10px',
    borderRadius: '6px',
    color: '#38bdf8',
    display: 'inline-block',
    border: '1px solid #0284c7'
  },
  vitalBox: {
    backgroundColor: '#1e293b',
    padding: '14px',
    borderRadius: '14px',
    textAlign: 'center',
    border: '1px solid #334155'
  },
  mainToggleBtn: {
    width: '100%',
    color: '#fff',
    border: 'none',
    padding: '14px',
    borderRadius: '12px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer'
  },
  fullscreenModal: {
    backgroundColor: '#090d16',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justify: 'center'
  },
  permissionBox: {
    backgroundColor: '#1e293b',
    border: '2px solid #38bdf8',
    borderRadius: '18px',
    padding: '24px',
    maxWidth: '340px',
    width: '100%',
    textAlign: 'center'
  },
  allowBtn: {
    flex: 1,
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  denyBtn: {
    flex: 1,
    backgroundColor: '#334155',
    color: '#cbd5e1',
    border: 'none',
    padding: '10px',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default App;