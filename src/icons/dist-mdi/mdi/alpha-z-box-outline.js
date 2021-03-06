import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaZBoxOutline",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","z","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-z-box-outline"},
      [ 
        h(
          "path",
          {"d":"M9,7H15V9L11,15H15V17H9V15L13,9H9V7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z"}
        ) 
      ]
    )
  }
}