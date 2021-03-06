import { h } from 'vue'
export default {
  $_icon: {
    name: "BorderAllVariant",
    vendor: "Mdi",
    type: "",
    tags: ["border","all","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-border-all-variant"},
      [ 
        h(
          "path",
          {"d":"M3,21V3H21V21H3M5,5V19H19V5H5Z"}
        ) 
      ]
    )
  }
}