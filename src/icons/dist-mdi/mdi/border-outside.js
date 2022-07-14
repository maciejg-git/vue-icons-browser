import { h } from 'vue'
export default {
  $_icon: {
    name: "BorderOutside",
    vendor: "Mdi",
    type: "",
    tags: ["border","outside"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-border-outside"},
      [ 
        h(
          "path",
          {"d":"M9,11H7V13H9M13,15H11V17H13M19,19H5V5H19M3,21H21V3H3M17,11H15V13H17M13,11H11V13H13M13,7H11V9H13V7Z"}
        ) 
      ]
    )
  }
}