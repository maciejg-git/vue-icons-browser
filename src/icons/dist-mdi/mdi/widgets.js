import { h } from 'vue'
export default {
  $_icon: {
    name: "Widgets",
    vendor: "Mdi",
    type: "",
    tags: ["widgets"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-widgets"},
      [ 
        h(
          "path",
          {"d":"M3,3H11V7.34L16.66,1.69L22.31,7.34L16.66,13H21V21H13V13H16.66L11,7.34V11H3V3M3,13H11V21H3V13Z"}
        ) 
      ]
    )
  }
}