import { h } from 'vue'
export default {
  $_icon: {
    name: "CrownOutline",
    vendor: "Mdi",
    type: "",
    tags: ["crown","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-crown-outline"},
      [ 
        h(
          "path",
          {"d":"M12 8L15 13.2L18 10.5L17.3 14H6.7L6 10.5L9 13.2L12 8M12 4L8.5 10L3 5L5 16H19L21 5L15.5 10L12 4M19 18H5V19C5 19.6 5.4 20 6 20H18C18.6 20 19 19.6 19 19V18Z"}
        ) 
      ]
    )
  }
}