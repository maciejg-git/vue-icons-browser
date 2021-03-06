import { h } from 'vue'
export default {
  $_icon: {
    name: "Mouse",
    vendor: "Mdi",
    type: "",
    tags: ["mouse"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-mouse"},
      [ 
        h(
          "path",
          {"d":"M11,1.07C7.05,1.56 4,4.92 4,9H11M4,15A8,8 0 0,0 12,23A8,8 0 0,0 20,15V11H4M13,1.07V9H20C20,4.92 16.94,1.56 13,1.07Z"}
        ) 
      ]
    )
  }
}