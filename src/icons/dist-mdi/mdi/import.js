import { h } from 'vue'
export default {
  $_icon: {
    name: "Import",
    vendor: "Mdi",
    type: "",
    tags: ["import"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-import"},
      [ 
        h(
          "path",
          {"d":"M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"}
        ) 
      ]
    )
  }
}