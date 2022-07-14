import { h } from 'vue'
export default {
  $_icon: {
    name: "RecordBtnFill",
    vendor: "B",
    type: "",
    tags: ["record","btn","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-record-btn-fill"},
      [ 
        h(
          "path",
          {"d":"M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}
        ) 
      ]
    )
  }
}