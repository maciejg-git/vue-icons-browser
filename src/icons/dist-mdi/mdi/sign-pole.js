import { h } from 'vue'
export default {
  $_icon: {
    name: "SignPole",
    vendor: "Mdi",
    type: "",
    tags: ["sign","pole"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-sign-pole"},
      [ 
        h(
          "path",
          {"d":"M11 3L12 2L13 3V20C14.11 20 15 20.9 15 22H9C9 20.9 9.9 20 11 20V3Z"}
        ) 
      ]
    )
  }
}