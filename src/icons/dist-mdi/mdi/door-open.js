import { h } from 'vue'
export default {
  $_icon: {
    name: "DoorOpen",
    vendor: "Mdi",
    type: "",
    tags: ["door","open"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-door-open"},
      [ 
        h(
          "path",
          {"d":"M12,3C10.89,3 10,3.89 10,5H3V19H2V21H22V19H21V5C21,3.89 20.11,3 19,3H12M12,5H19V19H12V5M5,11H7V13H5V11Z"}
        ) 
      ]
    )
  }
}