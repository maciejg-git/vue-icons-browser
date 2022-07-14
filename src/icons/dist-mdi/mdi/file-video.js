import { h } from 'vue'
export default {
  $_icon: {
    name: "FileVideo",
    vendor: "Mdi",
    type: "",
    tags: ["file","video"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-file-video"},
      [ 
        h(
          "path",
          {"d":"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M17,19V13L14,15.2V13H7V19H14V16.8L17,19Z"}
        ) 
      ]
    )
  }
}