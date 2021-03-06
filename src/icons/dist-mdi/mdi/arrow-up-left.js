import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpLeft",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","up","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-up-left"},
      [ 
        h(
          "path",
          {"d":"M20 18V20H13.5C9.91 20 7 17.09 7 13.5V7.83L3.91 10.92L2.5 9.5L8 4L13.5 9.5L12.09 10.91L9 7.83V13.5C9 16 11 18 13.5 18H20Z"}
        ) 
      ]
    )
  }
}