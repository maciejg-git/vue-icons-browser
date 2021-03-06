import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuSwap",
    vendor: "Mdi",
    type: "",
    tags: ["menu","swap"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-menu-swap"},
      [ 
        h(
          "path",
          {"d":"M12,6L7,11H17L12,6M7,13L12,18L17,13H7Z"}
        ) 
      ]
    )
  }
}