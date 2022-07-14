import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronDoubleRight",
    vendor: "Mdi",
    type: "",
    tags: ["chevron","double","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-chevron-double-right"},
      [ 
        h(
          "path",
          {"d":"M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"}
        ) 
      ]
    )
  }
}