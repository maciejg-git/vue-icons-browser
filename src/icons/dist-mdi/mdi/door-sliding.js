import { h } from 'vue'
export default {
  $_icon: {
    name: "DoorSliding",
    vendor: "Mdi",
    type: "",
    tags: ["door","sliding"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-door-sliding"},
      [ 
        h(
          "path",
          {"d":"M10 13H8V11H10V13M16 11H14V13H16V11M21 19V21H3V19H4V5C4 3.9 4.9 3 6 3H18C19.1 3 20 3.9 20 5V19H21M11 5H6V19H11V5M18 5H13V19H18V5Z"}
        ) 
      ]
    )
  }
}