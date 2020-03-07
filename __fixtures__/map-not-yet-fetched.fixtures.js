import { DataView } from '../src/index'

const datapackage = {
  "views": [
    {
      "specType": "map",
      "resources": [
        {
          "path": "https://montreal.l3.ckan.io/en/dataset/587de1ea-817b-4e10-b387-83ec89f94e1b/resource/bc1e71e4-269a-4fa9-a278-ab6bfd80ec23/download/murales.geojson",
          "pathType": "remote",
          "name": "geojson-test",
          "format": "GeoJSON",
          "mediatype": "application/geo+json",
          "encoding": "utf-8"
        }
      ]
    }
  ]
}

const loading = false

export default {
  component: DataView,
  props: {datapackage, loading}
};
