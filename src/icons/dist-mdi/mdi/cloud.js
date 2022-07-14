import { h } from 'vue'
export default {
  $_icon: {
    name: "Cloud",
    vendor: "Mdi",
    type: "",
    tags: ["cloud"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cloud"},
      [ 
        h(
          "path",
          {"d":"M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z"}
        ) 
      ]
    )
  }
}