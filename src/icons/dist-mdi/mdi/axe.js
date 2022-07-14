import { h } from 'vue'
export default {
  $_icon: {
    name: "Axe",
    vendor: "Mdi",
    type: "",
    tags: ["axe"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-axe"},
      [ 
        h(
          "path",
          {"d":"M12,2L22,8C22,12 20,14 16,15L13,10L9,6L12,2M4.11,19.84L2.12,18.33L9.19,9L11,10.81L4.11,19.84Z"}
        ) 
      ]
    )
  }
}