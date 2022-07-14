import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaJ",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","j"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-j"},
      [ 
        h(
          "path",
          {"d":"M13,7V15H11V14H9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V7H13Z"}
        ) 
      ]
    )
  }
}