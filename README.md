# cadenza-maps-capacitor-example

Setup:
- place cadenza-maps.js (use artefact cadenza-maps-capacitor:2.0.30) under src/lib/cadenza-maps
- add GIS 2go server credentials to .env.local file
- set build setting „Weak References in Manual Retain Release = No“ in Pods/CordovaPlugings Xcode target (iOS only)
- run "coldStartAndroid" or "coldStartIos"

Content:
- capacitor-welcome.js: initializes cadenza-maps, supports different use cases to show maps and features