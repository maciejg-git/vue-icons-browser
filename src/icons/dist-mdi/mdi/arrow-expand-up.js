import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowExpandUp",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","expand","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-expand-up"},
      [ 
        h(
          "path",
          {"d":"M2,20V22H22V20H13V5.83L18.5,11.33L19.92,9.92L12,2L4.08,9.92L5.5,11.33L11,5.83V20H2Z"}
        ) 
      ]
    )
  }
}