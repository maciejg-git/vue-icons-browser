import { h } from 'vue'
export default {
  $_icon: {
    name: "MapMarkerDown",
    vendor: "Mdi",
    type: "",
    tags: ["map","marker","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-map-marker-down"},
      [ 
        h(
          "path",
          {"d":"M12 2A7 7 0 0 0 5 9C5 14.25 12 22 12 22S19 14.25 19 9A7 7 0 0 0 12 2M7.5 10H10V5H14V10H16.5L12 14.5Z"}
        ) 
      ]
    )
  }
}