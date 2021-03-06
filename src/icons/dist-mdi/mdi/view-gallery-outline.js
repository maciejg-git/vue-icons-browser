import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewGalleryOutline",
    vendor: "Mdi",
    type: "",
    tags: ["view","gallery","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-view-gallery-outline"},
      [ 
        h(
          "path",
          {"d":"M1 3V21H23V3H1M21 5V14H3V5H21M11 16V19H8V16H11M3 16H6V19H3V16M13 19V16H16V19H13M18 19V16H21V19H18Z"}
        ) 
      ]
    )
  }
}