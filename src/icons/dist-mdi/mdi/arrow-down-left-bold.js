import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownLeftBold",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","down","left","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-down-left-bold"},
      [ 
        h(
          "path",
          {"d":"M21 3V7H13.5C11.57 7 10 8.57 10 10.5V13H14L8 20L2 13H6V10.5C6 6.36 9.36 3 13.5 3H21Z"}
        ) 
      ]
    )
  }
}