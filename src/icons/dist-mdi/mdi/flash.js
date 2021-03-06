import { h } from 'vue'
export default {
  $_icon: {
    name: "Flash",
    vendor: "Mdi",
    type: "",
    tags: ["flash"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-flash"},
      [ 
        h(
          "path",
          {"d":"M7,2V13H10V22L17,10H13L17,2H7Z"}
        ) 
      ]
    )
  }
}