# cadenza-maps-capacitor-example

Setup:
- place cadenza-maps.js (use artefact cadenza-maps-capacitor:2.0.37) under src/lib/cadenza-maps
- add GIS 2go server credentials to .env.local file
- in Xcode project > Targets > CordovaPlugins > Build Phases > Compile Sources: set compiler flag for CDVFile.m and CDVFileTransfer.m to "-fno-objc-arc" 
- run "coldStartAndroid" or "coldStartIos"

Content:
- capacitor-welcome.js: initializes cadenza-maps, supports different use cases to show maps and features