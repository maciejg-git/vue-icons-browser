import { h } from 'vue'
export default {
  $_icon: {
    name: "EmailMultipleOutline",
    vendor: "Mdi",
    type: "",
    tags: ["email","multiple","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-email-multiple-outline"},
      [ 
        h(
          "path",
          {"d":"M2 6V20H20V22H2C.895 22 0 21.11 0 20V6H2M24 4C24 2.9 23.1 2 22 2H6C4.9 2 4 2.9 4 4V16C4 17.1 4.9 18 6 18H22C23.1 18 24 17.1 24 16V4M22 4L14 9L6 4H22M22 16H6V6L14 11L22 6V16Z"}
        ) 
      ]
    )
  }
}