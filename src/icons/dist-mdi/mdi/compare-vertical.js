import { h } from 'vue'
export default {
  $_icon: {
    name: "CompareVertical",
    vendor: "Mdi",
    type: "",
    tags: ["compare","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-compare-vertical"},
      [ 
        h(
          "path",
          {"d":"M14 15V22H16V15H19L15 11L11 15H14M13 9H10V2H8V9H5L9 13L13 9Z"}
        ) 
      ]
    )
  }
}