import { h } from 'vue'
export default {
  $_icon: {
    name: "SelectionDrag",
    vendor: "Mdi",
    type: "",
    tags: ["selection","drag"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-selection-drag"},
      [ 
        h(
          "path",
          {"d":"M14,17H17V14H19V17H22V19H19V22H17V19H14V17M12,17V19H9V17H12M7,17V19H3V15H5V17H7M3,13V10H5V13H3M3,8V4H7V6H5V8H3M9,4H12V6H9V4M15,4H19V8H17V6H15V4M19,10V12H17V10H19Z"}
        ) 
      ]
    )
  }
}