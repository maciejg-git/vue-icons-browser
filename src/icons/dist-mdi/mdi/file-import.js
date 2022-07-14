import { h } from 'vue'
export default {
  $_icon: {
    name: "FileImport",
    vendor: "Mdi",
    type: "",
    tags: ["file","import"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-file-import"},
      [ 
        h(
          "path",
          {"d":"M6,2C4.89,2 4,2.9 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13,3.5L18.5,9H13M10.05,11.22L12.88,14.05L15,11.93V19H7.93L10.05,16.88L7.22,14.05"}
        ) 
      ]
    )
  }
}