import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownDropCircle",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","down","drop","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-down-drop-circle"},
      [ 
        h(
          "path",
          {"d":"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M7,10L12,15L17,10H7Z"}
        ) 
      ]
    )
  }
}