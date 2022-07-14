import { h } from 'vue'
export default {
  $_icon: {
    name: "MoonWaningGibbous",
    vendor: "Mdi",
    type: "",
    tags: ["moon","waning","gibbous"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-moon-waning-gibbous"},
      [ 
        h(
          "path",
          {"d":"M18 12C18 7.5 16.08 3.26 12 2A10 10 0 0 0 12 22C16.08 20.74 18 16.5 18 12Z"}
        ) 
      ]
    )
  }
}