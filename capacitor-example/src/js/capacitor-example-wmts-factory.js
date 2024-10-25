const mapDescription = {
  "id": "test",
  "baseURI": '',
  "readFromMapModFile": false,
  "mapConfiguration": {
    "id": "test",
    "general": {
      "boundingBox": {
        "srs": "EPSG:25832",
        "minx": -20037508.34,
        "miny": -20037508.34,
        "maxx": 20037508.34,
        "maxy": 20037508.34
      },
      "title": "Test Map",
      "abstract": "OpenStreetMap",
      "extension": {
        "autoGeolocate": true,
        "maxExtent": {
          "minx": -20037508.34,
          "miny": -20037508.34,
          "maxx": 20037508.34,
          "maxy": 20037508.34
        },
        "maxResolution": 156543.033928041,
        "resolutions": [
          156543.033928041,
          78271.5169640204,
          39135.7584820102,
          19567.8792410051,
          9783.93962050255,
          4891.96981025128,
          2445.98490512564, 1222.99245256282, 611.496226281409, 305.748113140705, 152.874056570352, 76.4370282851762, 38.2185141425881, 19.109257071294, 9.55462853564702, 4.77731426782351, 2.38865713391176, 1.19432856695588, 0.597164283477939
        ],
        "cmmapVersion": "1.1.0"
      }
    }, "layerList": {
      "layer": []
    }
  }
};

const wmtsLayerConfigurationItem = {
  id: 'test_layer',
  baseURI: null,
  mapId: 'test',
  layerConfiguration: {
    "id": "test",
    "queryable": false,
    "utfgrid": false,
    "hidden": false,
    "server": {
      "service": "OGC:WMTS",
      "onlineResource": {
        "href": "https://sgx.geodatenzentrum.de/wmts_topplus_open/1.0.0/WMTSCapabilities.xml"
      }
    },
    "legend": {
      "thumbnail": {
        "onlineResource": {
          "href": "legend.png"
        },
        "width": 22,
        "height": 28,
        "format": "image/png"
      }
    },
    "name": "web",
    "title": "TopPlusOpen",
    "formatList": {
      "format": [{
        "value": "image/png",
        "current": true
      }]
    },
    "styleList": {
      "style": [{
        "name": "default",
        "title": "Default",
        "current": true
      }]
    },
    "extension": {
      "requestEncoding": "REST",
      "isBaseLayer": false,
      "matrixSet": "EU_EPSG_25832_TOPPLUS",
      // "matrixSet": "WEBMERCATOR",
      "serverResolutions": [
        156543.033928041,
        78271.5169640204,
        39135.7584820102,
        19567.8792410051,
        9783.93962050255,
        4891.96981025128,
        2445.98490512564,
        1222.99245256282,
        611.496226281409,
        305.748113140705,
        152.874056570352,
        76.4370282851762,
        38.2185141425881,
        19.109257071294,
        9.55462853564702,
        4.77731426782351,
        2.38865713391176,
        1.19432856695588,
        0.597164283477939
      ],
      "matrixIds": [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18"
      ],
      "editable": false,
      "geometryEditable": false,
      "sphericalMercator": false,
      "wrapDateLine": false
    }
  }
};


(async () => {

  const _cadenzaStore = new CadenzaMaps.CadenzaStore({
    mobileAppDataPath: '',
    mobileServerUrl: 'https://gis2go.disy.net/cadenza-mobile-server/MobileDataService',
    mobileServerAccount: '',
    mobileServerPassword: '',
    bundleIdentifier: 'net.disy.cadenza.mobile.app',
    appVersion: '3.6.0',
    invalidAppVersionErrorHandler: () => { },
    mapServerUrl: '',
    spatialiteServerUrl: ''
  });
  const mapRepository = new CadenzaMaps.MapRepository(_cadenzaStore)
  const _mapViewFactory = new CadenzaMaps.MapViewFactory(mapRepository, {
  });

  let mapView;

  await _mapViewFactory.ready();

  const mapFactory = _mapViewFactory.getGtmMapFactory();
  const mapViewFactory = _mapViewFactory;

  mapView = mapViewFactory.createMapView({
    targetElement: 'map'
  });

  const map = await mapFactory.create(mapDescription, 'map');

  const wmtsLayerFactory = new window.CadenzaMaps.layer.factory.wmts();
  const wmtsLayer = await wmtsLayerFactory.create(mapDescription, wmtsLayerConfigurationItem, map);

  map.addLayer(wmtsLayer);
})();
