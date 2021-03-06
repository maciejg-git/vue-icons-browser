import { h } from 'vue'
export default {
  $_icon: {
    name: "MouseFill",
    vendor: "B",
    type: "",
    tags: ["mouse","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-mouse-fill"},
      [ 
        h(
          "path",
          {"d":"M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V5zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z"}
        ) 
      ]
    )
  }
}