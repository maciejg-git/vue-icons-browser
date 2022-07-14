import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeOff",
    vendor: "Mdi",
    type: "",
    tags: ["home","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-home-off"},
      [ 
        h(
          "path",
          {"d":"M20.84 22.73L18.11 20H14V15.89L12.11 14H10V20H5V12H2L6.27 8.16L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M19 12H22L12 3L8.95 5.75L19 15.8V12Z"}
        ) 
      ]
    )
  }
}