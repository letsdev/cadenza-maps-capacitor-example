

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
let map;

_mapViewFactory.ready().then(() => {

  const mapFactory = _mapViewFactory.getGtmMapFactory();

  const mapViewFactory = _mapViewFactory;
  mapView = mapViewFactory.createMapView({
    targetElement: 'map'
  });


  mapFactory.create({
    "id": "osm",
    "baseURI": "file:///data/user/0/net.disy.cadenza.mobile.app/files/files/CadenzaMobile/maps/osm/",
    "readFromMapModFile": false,
    "mapConfiguration": {
      "id": "osm",
      "general": {
        "boundingBox": {
          "srs": "EPSG:900913",
          "minx": -20037508.34,
          "miny": -20037508.34,
          "maxx": 20037508.34,
          "maxy": 20037508.34
        },
        "title": "OSM",
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
        "layer": [
          {
            "id": "osm",
            "hidden": false,
            "server": {
              "service": "OL:XYZ",
              "onlineResource": {
                "href": "https://tile.openstreetmap.org/${z}/${x}/${y}.png"
              }
            },
            "name": "tile.openstreetmap.org",
            "title": "OpenStreetMap",
            "extension": {
              "sphericalMercator": true,
              "wrapDateLine": true
            }
          }
        ]
      }
    }
  }, 'map').then((_map) => {
    map = _map;
  });

  buttonClick();
})

function buttonClick() {
  const mapDescription = {
    id: 'download1127',
    mobileServerId: '1127',
    isDownloadable: true,
    size: 100,
    mobileServerCreated: 100
  }

  const onProgress = () => { };

  mapRepository.downloadMap(mapDescription, onProgress, {
    deleteExisting: false,
    keepLocalChanges: false
  });
}





