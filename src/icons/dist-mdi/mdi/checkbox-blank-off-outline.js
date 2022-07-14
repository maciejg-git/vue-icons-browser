import { h } from 'vue'
export default {
  $_icon: {
    name: "CheckboxBlankOffOutline",
    vendor: "Mdi",
    type: "",
    tags: ["checkbox","blank","off","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-checkbox-blank-off-outline"},
      [ 
        h(
          "path",
          {"d":"M22.11 21.46L2.39 1.73L1.11 3L3 4.9V19C3 20.11 3.9 21 5 21H19.1L20.84 22.73L22.11 21.46M5 19V6.89L17.11 19H5M8.2 5L6.2 3H19C20.1 3 21 3.89 21 5V17.8L19 15.8V5H8.2Z"}
        ) 
      ]
    )
  }
}