import { h } from 'vue'
export default {
  $_icon: {
    name: "DragHorizontalVariant",
    vendor: "Mdi",
    type: "",
    tags: ["drag","horizontal","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-drag-horizontal-variant"},
      [ 
        h(
          "path",
          {"d":"M21 11H3V9H21V11M21 13H3V15H21V13Z"}
        ) 
      ]
    )
  }
}