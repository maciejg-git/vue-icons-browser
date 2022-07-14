import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronLeft",
    vendor: "B",
    type: "",
    tags: ["chevron","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-chevron-left"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}
        ) 
      ]
    )
  }
}