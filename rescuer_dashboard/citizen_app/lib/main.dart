import 'dart:async';

// PulseScout - Citizen Offline BLE Beacon Simulator
void main() {
  print("==========================================");
  print("  PulseScout Citizen BLE Beacon Started   ");
  print("==========================================");
  print("Status: Offline Mode Active");
  print("Broadcasting BLE SOS Advertisements...");
  
  // Simulating heart rate and SpO2 sensor readings
  int heartRate = 112;
  int spO2 = 88;
  String triageStatus = (heartRate > 100 || spO2 < 90) ? "P1 - RED" : "P3 - GREEN";

  Timer.periodic(Duration(seconds: 3), (timer) {
    print("\n[BLE PACKET BROADCAST]");
    print("Device ID    : VS-101");
    print("Heart Rate   : $heartRate BPM");
    print("SpO2 Level   : $spO2 %");
    print("Triage Level : $triageStatus");
    print("Signal (RSSI): -65 dBm");
  });
}