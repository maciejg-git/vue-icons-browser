import { h } from 'vue'
export default {
  $_icon: {
    name: "GlassStange",
    vendor: "Mdi",
    type: "",
    tags: ["glass","stange"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-glass-stange"},
      [ 
        h(
          "path",
          {"d":"M8,2H16V22H8V2M10,4V7H14V4H10Z"}
        ) 
      ]
    )
  }
}