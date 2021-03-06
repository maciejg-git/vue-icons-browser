import { h } from 'vue'
export default {
  $_icon: {
    name: "CallMissed",
    vendor: "Mdi",
    type: "",
    tags: ["call","missed"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-call-missed"},
      [ 
        h(
          "path",
          {"d":"M19.59,7L12,14.59L6.41,9H11V7H3V15H5V10.41L12,17.41L21,8.41"}
        ) 
      ]
    )
  }
}