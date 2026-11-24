# cadenza-maps-capacitor-example

Setup:
- place cadenza-maps.js (use artefact cadenza-maps-capacitor:3.10.1) under src/lib/cadenza-maps
- add GIS 2go server credentials to .env.local file
- run "coldStartAndroid" or "coldStartIos"

Content:
- capacitor-welcome.js: initializes cadenza-maps, supports different use cases to show maps and features

Android release builds (R8):
- to build release with `minifyEnabled true` (R8 code shrinking/obfuscation, required by Google Play's DEX code optimization threshold), the Cadenza Maps Cordova plugins need keep rules: JNI in cordova-spatialite-storage, reflection in net.disy.cm.zip and cordova-plugin-file-transfer, plugin loading via config.xml
- the rules are maintained in `capacitor-example/proguard-cadenza-maps-plugins.pro`; since the generated Android project is not under version control, append them to `android/app/proguard-rules.pro` and set `minifyEnabled true` in the release build type of `android/app/build.gradle` (also do this in any app built from this template before enabling R8)