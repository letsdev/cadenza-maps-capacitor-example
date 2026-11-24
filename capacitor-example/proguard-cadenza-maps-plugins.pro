# ---------------------------------------------------------------------------
# Cadenza Maps Cordova plugins — ProGuard/R8 keep rules
#
# Required when Android release builds run with `minifyEnabled true` (R8 code
# shrinking/obfuscation, needed to meet Google Play's DEX code optimization
# threshold).
#
# Usage: the generated Android project (capacitor-example/android) is not
# under version control. After `npx cap add android`, append the rules below
# to `android/app/proguard-rules.pro` and set `minifyEnabled true` in the
# release build type of `android/app/build.gradle`.
#
# Capacitor's own consumer rules (@capacitor/android) already keep classes
# extending org.apache.cordova.* — i.e. the plugin entry points that Cordova's
# PluginManager instantiates by name from config.xml. The rules below cover
# the remaining name-based access (JNI and reflection).
# ---------------------------------------------------------------------------

# cordova-plugin-file-transfer calls CordovaWebView/PluginManager methods via
# reflection (getCookieManager, getCookie, getPluginManager,
# shouldAllowRequest, getWhitelist). The targets are Capacitor's Cordova
# compatibility classes, which Capacitor's consumer rules do NOT keep.
-keep class org.apache.cordova.** { *; }

# CMAppPlugin and GTMZipUtilsPlugin are loaded by name via config.xml
# (onload). Keeps all let's dev / Disy plugin classes.
-keep class net.disy.** { *; }

# cordova-spatialite-storage: libjsqlite.so binds Java methods via JNI symbol
# names (Java_jsqlite_*) and calls back into Java by name — FindClass on
# jsqlite/Exception and jsqlite/FunctionContext, methods such as
# columns/newrow/types (Callback), function/step/last_step (Function), busy,
# authorize, trace, profile, progress, and the fields handle/error_code.
# Nothing in the jsqlite package may be renamed or stripped.
-keep class jsqlite.** { *; }

# cordova-spatialite-storage plugin entry point (loaded via config.xml) and
# database wrapper.
-keep class io.liteglue.** { *; }

# net.disy.cm.zip embeds a copy of Apache Commons Compress:
# ExtraFieldUtils instantiates zip extra fields via Class.newInstance() in a
# static initializer (opening any zip would crash without this rule), and
# net.disy.gisterm.mobile.plugin.util.ArchiveUtils creates archive streams via
# constructor reflection.
-keep class org.apache.commons.compress.** { *; }
