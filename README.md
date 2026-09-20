# ⚡ PulseScout — Dual-App Disaster Response Platform

> **Saving Lives in the "Golden Hour" When Networks Collapse.**
>
> PulseScout is a disaster-response platform designed to help citizens and rescue teams communicate during emergencies when traditional communication infrastructure may be unavailable.

It combines an **offline-first citizen emergency interface**, **BLE mesh communication concepts**, **GPS-based location sharing**, **heuristic AI-based triage prioritization**, and an **EOC tactical dashboard** for rescue coordination.

---

## 🌐 Project Links

| Resource                  | Link                                      |
| ------------------------- | ----------------------------------------- |
| 🚀 Live Rescuer Dashboard | https://pulse-scout-nu.vercel.app         |
| 💻 GitHub Repository      | https://github.com/sharmii0608/PulseScout |

---

# 🎯 Problem Statement

During major disasters such as earthquakes, floods, cyclones, and building collapses, communication infrastructure can become unreliable.

### Major challenges include:

* 📡 Cellular networks may become unavailable or overloaded.
* 🔋 Power outages can limit access to communication devices.
* 🚨 Emergency teams may have difficulty identifying victims who need immediate assistance.
* 📍 Rescue teams may not have accurate or recent victim-location information.
* ⏱️ Delays in identifying critical victims can affect rescue operations during the **Golden Hour**.

Traditional emergency communication systems often depend heavily on centralized infrastructure.

**PulseScout explores an offline-first, peer-to-peer approach to emergency communication and rescue coordination.**

---

# 💡 Our Solution

PulseScout consists of two major components:

### 👤 Citizen Emergency App

The citizen-side application acts as an emergency beacon that can collect and display:

* ❤️ Vital information such as heart rate and SpO₂
* 📍 GPS location
* 🔋 Device/battery information
* 🚨 Emergency status
* 🗺️ Safe-route guidance
* 📡 Peer-to-peer communication information

### 🚑 Rescuer / EOC Dashboard

The rescuer dashboard provides emergency teams with a centralized tactical view containing:

* 📍 Victim locations
* ❤️ Vital-health indicators
* 🧠 Priority/triage scores
* 🚨 Emergency severity
* ⏱️ Last-known information
* 🗺️ Navigation to victim locations

---

# 🔄 System Architecture

```text
                  PULSESCOUT DISASTER RESPONSE SYSTEM

 ┌─────────────────────────┐
 │     👤 CITIZEN APP      │
 │                         │
 │ • Emergency Beacon      │
 │ • Vital Information     │
 │ • GPS Location          │
 │ • Battery Status        │
 │ • Safe Route Guidance   │
 └────────────┬────────────┘
              │
              │ BLE / Peer-to-Peer
              │ Communication
              ▼
 ┌─────────────────────────┐
 │      📡 MESH NODES      │
 │                         │
 │ • Relay Emergency Data  │
 │ • Forward Location      │
 │ • Extend Communication  │
 └────────────┬────────────┘
              │
              │ Emergency Telemetry
              ▼
 ┌─────────────────────────┐
 │ 🚑 RESCUER / EOC APP    │
 │                         │
 │ • Tactical Radar        │
 │ • Victim Locations      │
 │ • Priority Scores       │
 │ • Vital Information     │
 │ • Navigation            │
 └─────────────────────────┘
```

---

# 🖼️ Application Screenshots

> 📌 **Replace the image paths below with your actual screenshots.**
>
> Recommended approach: create a folder named `screenshots` in your repository and upload your images there.

---

## 1. 🚑 EOC Rescuer Tactical Radar Dashboard

The EOC dashboard provides rescue teams with a high-contrast tactical interface for monitoring emergency victims.

### Screenshot

![PulseScout Rescuer Tactical Radar Dashboard](./image%20(3).png)

**Highlights:**

* Live-style victim radar visualization
* Emergency victim markers
* Health-status indicators
* Priority levels
* Location information
* Tactical dark-mode interface

---

## 2. 🚨 AI Priority Triage Panel

The triage panel provides rescue personnel with detailed information about an individual victim.

### Screenshot

![PulseScout AI Triage Panel](./image%20(4).png)
![PulseScout AI Triage Panel](./image%20(5).png)

**Displayed information may include:**

* ❤️ Heart Rate
* 🫁 SpO₂
* 📍 Location
* 🔋 Battery status
* ⏱️ Last-seen timestamp
* 🧠 Priority score
* 🚨 Emergency severity
* 🗺️ Navigation option

---

## 3. 👤 Citizen Emergency App

The citizen interface allows a user to activate emergency mode and share important emergency information.

### Screenshot

![PulseScout Citizen Emergency App](./image%20(2).png)

**Key interface elements:**

* Emergency activation
* Vital information
* Location status
* Connectivity status
* Battery status
* Safe-route information

---

## 4. 🗺️ Safe Route / Navigation

The application can provide location-based navigation and safe-route guidance for emergency situations.

### Screenshot

![PulseScout Safe Route](./image%20(6).png)

---

# ✨ Key Features

## 📡 1. Offline BLE Mesh Communication

PulseScout is designed around the concept of peer-to-peer communication between nearby devices.

Instead of requiring every device to communicate directly with a remote server, devices can potentially act as relay nodes.

```text
Device A
   ↓
Device B
   ↓
Device C
   ↓
Rescue Team
```

This approach can help extend communication across areas where conventional connectivity is unavailable.

> **Note:** Browser-based BLE capabilities depend on the device, browser, operating system, and implementation. The project currently demonstrates/emulates parts of this concept rather than claiming full production-grade BLE mesh networking.

---

# 🧠 2. Heuristic AI Priority Triage

PulseScout uses a **heuristic risk-scoring approach** to help prioritize victims.

The system can evaluate factors such as:

* SpO₂ abnormalities
* Heart-rate abnormalities
* Battery condition
* Signal-loss duration
* Proximity to hazard zones
* Emergency status

A conceptual priority score can be represented as:

```text
Priority Score =
    Vital Risk
  + Location Risk
  + Communication Risk
  + Battery Risk
  + Time/Situation Risk
```

The resulting score is represented on a **0–100 scale**.

### Example

```text
Victim A
SpO₂       → Critical
Heart Rate → Abnormal
Battery    → Low
Location   → Hazard Zone

Priority Score → 92 / 100
```

The score is intended as a **decision-support mechanism**, not a replacement for trained medical professionals or emergency responders.

---

# 🔋 3. Battery-Dead Recovery Concept

A disaster scenario can involve sudden device shutdown due to battery depletion.

PulseScout explores persistent local storage for retaining important last-known information before device power is lost.

Example information:

```text
Last Known Location
Last Recorded Vital Information
Last Communication Time
Emergency Status
Device Information
```

This information can potentially help rescue teams identify the last known position of a victim.

---

# 📍 4. GPS Location Tracking

The citizen application can obtain location information using the browser's geolocation capabilities.

Example:

```text
Latitude  : 13.xxxxxx
Longitude : 80.xxxxxx
Timestamp : 12:45 PM
```

The rescuer dashboard can use the location information to visualize victim positions.

---

# 🗺️ 5. Navigation Support

The rescuer dashboard provides a navigation option for reaching a victim's reported location.

The system can open a map/navigation service with the victim's coordinates.

---

# 🚨 6. Dynamic Safe-Route Guidance

The citizen-side interface can display guidance toward designated safe locations.

Potential inputs include:

* Current GPS position
* Known hazard areas
* Safe zones
* Emergency routes
* Shelter locations

---

# 📊 7. Tactical Radar Interface

The EOC dashboard uses a radar-style interface to provide a quick visual overview of emergency situations.

Example:

```text
                ⚠️ HAZARD ZONE

                    🔴
               Victim #102

        🟠                         🟢
     Victim #98                Victim #91


                  🚑 EOC

             🟡 Victim #105
```

This allows rescue personnel to quickly identify areas requiring attention.

---

# 🛠️ Technology Stack

| Category              | Technology                    |
| --------------------- | ----------------------------- |
| Frontend              | React.js                      |
| UI                    | HTML5, CSS3                   |
| Visualization         | HTML5 Canvas                  |
| Communication Concept | BLE / Peer-to-Peer            |
| Browser API           | Web Bluetooth API             |
| Location              | Browser Geolocation API       |
| Maps                  | Google Maps / Navigation      |
| AI / Logic            | Heuristic Risk Scoring        |
| Storage               | LocalStorage / SessionStorage |
| Deployment            | Vercel                        |
| Version Control       | Git & GitHub                  |

---

# 📁 Project Structure

```text
PulseScout/
│
├── rescuer_dashboard/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── citizen_preview/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── screenshots/
│   ├── rescuer-dashboard.png
│   ├── triage-panel.png
│   ├── citizen-app.png
│   ├── disaster-alert.png
│   └── safe-route.png
│
├── README.md
└── LICENSE
```

---

# 🚀 Installation & Setup

## Prerequisites

Make sure the following are installed:

* **Node.js** — v16 or higher
* **npm** — v8 or higher
* **Git**

Check your versions:

```bash
node --version
npm --version
git --version
```

---

## 1. Clone the Repository

```bash
git clone https://github.com/sharmii0608/PulseScout.git
```

Move into the project:

```bash
cd PulseScout
```

---

# 🚑 2. Run the Rescuer Dashboard

Open the dashboard folder:

```bash
cd rescuer_dashboard
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

The dashboard should be available at:

```text
http://localhost:3000
```

---

# 👤 3. Run the Citizen Preview App

Open another terminal.

Navigate to the citizen application:

```bash
cd PulseScout/citizen_preview
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

The citizen application should be available at:

```text
http://localhost:3001
```

> **Note:** The exact port may vary depending on your React configuration and whether another application is already using the default port.

---

# 🔐 Security & Privacy Considerations

Emergency applications can process highly sensitive information.

PulseScout therefore considers:

* 🔒 Secure communication
* 🔐 Encryption of emergency telemetry
* 👤 Minimal collection of personal information
* 📍 Protection of location information
* 🛡️ Authentication for rescue personnel
* 🗃️ Secure storage and deletion of emergency data

For a production deployment, additional security controls would be required, including secure backend infrastructure, authentication, authorization, encryption, auditing, and privacy compliance.

---

# ⚠️ Important Technical Limitations

PulseScout is a **prototype / proof-of-concept disaster-response platform**.

The current implementation should not be treated as a certified emergency-response or medical system.

Important limitations include:

* Browser BLE support varies between platforms.
* True multi-hop BLE mesh networking requires appropriate device-level networking support.
* Browser applications cannot guarantee operation after complete device shutdown.
* Vital signs shown by a prototype interface may be simulated rather than obtained from certified medical devices.
* GPS accuracy depends on the device and environmental conditions.
* Internet-based map services may not be available during complete network outages.
* Heuristic triage scores are not medical diagnoses.

These limitations would need to be addressed before real-world emergency deployment.

---

# 🔮 Future Enhancements

The project can be extended with:

### 📡 Advanced Mesh Networking

Implement native BLE mesh communication with:

* Multi-hop routing
* Automatic node discovery
* Message forwarding
* Offline synchronization
* Store-and-forward communication

### 🤖 Advanced AI Triage

Future versions could incorporate machine-learning models trained and validated for emergency triage.

Potential inputs:

```text
Heart Rate
SpO₂
Respiratory Rate
Age
Location
Injury Type
Environmental Risk
Time Since Last Contact
```

### 🛰️ Additional Communication Technologies

Possible future integrations:

* LoRa
* Wi-Fi Direct
* Satellite communication
* Emergency radio systems

### 🏥 Emergency Service Integration

Future versions could integrate with:

* Ambulance services
* Hospitals
* Fire & rescue departments
* Emergency Operation Centers
* Disaster management authorities

### 📱 Native Mobile Applications

Develop dedicated Android/iOS applications to provide deeper access to:

* Bluetooth
* Background communication
* GPS
* Sensors
* Battery information
* Offline storage

---

# 🎥 Project Demonstration

### Demo Video

📌 **Add your project demonstration video here**

```text
[YouTube / Drive / Demo Video Link]
```

The demonstration can cover:

1. Citizen emergency activation
2. Victim information generation
3. Location sharing
4. BLE/mesh communication concept
5. Rescuer dashboard
6. Priority triage
7. Victim selection
8. Navigation

---

# 📸 Complete Application Preview

### Rescuer Dashboard

![Rescuer Dashboard](./screenshots/rescuer-dashboard.png)

### Victim Triage

![Victim Triage](./screenshots/triage-panel.png)

### Citizen Emergency Mode

![Citizen Emergency Mode](./screenshots/citizen-app.png)

### Disaster Alert

![Disaster Alert](./screenshots/disaster-alert.png)

### Safe Route

![Safe Route](./screenshots/safe-route.png)

---

# 🏆 Project Highlights

PulseScout demonstrates the combination of:

```text
       Disaster Management
                +
       Offline Communication
                +
        Location Tracking
                +
        Emergency Triage
                +
        Interactive UI/UX
                +
        Rescue Coordination
```

The project focuses on how modern web and mobile technologies can be explored to support emergency communication and rescue coordination in infrastructure-disrupted environments.

---

# 👩‍💻 Author

**Sharmila**

GitHub:

https://github.com/sharmii0608

---

## ⚡ PulseScout

> **When communication fails, every nearby device can become part of the response.**
