import { h } from 'vue'
export default {
  $_icon: {
    name: "MapMarkerLeft",
    vendor: "Mdi",
    type: "",
    tags: ["map","marker","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-map-marker-left"},
      [ 
        h(
          "path",
          {"d":"M15 11.5C13.62 11.5 12.5 10.38 12.5 9S13.62 6.5 15 6.5 17.5 7.62 17.5 9 16.38 11.5 15 11.5M8 9C8 14.25 15 22 15 22S22 14.25 22 9C22 5.13 18.87 2 15 2S8 5.13 8 9M6 7L1 12L6 17V7Z"}
        ) 
      ]
    )
  }
}