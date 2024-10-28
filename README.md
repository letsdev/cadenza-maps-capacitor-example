# cadenza-maps-capacitor-example

Setup:
- place cadenza-maps.js (use artefact cadenza-maps-capacitor:2.0.25) under src/lib/cadenza-maps
- add GIS 2go server credentials to mobileServerAccount and mobileServerPassword
- set build setting „Weak References in Manual Retain Release = No“ in Pods/CordovaPlugings Xcode target (iOS only)
- run "coldStartAndroid" or "coldStartIos"

Content:
- capacitor-welcome.js: initializes cadenza-maps, loads a map with a WMTS layer from sgx.geodatenzentrum.de/wmts_topplus_open, starts a map download and cancels it
- capacitor-example-wmts-factory.js: uses WMTSLayerFactory to add a WMTS layer to an existing map