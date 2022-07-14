import { h } from 'vue'
export default {
  $_icon: {
    name: "AccountAlert",
    vendor: "Mdi",
    type: "",
    tags: ["account","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-account-alert"},
      [ 
        h(
          "path",
          {"d":"M10 4A4 4 0 0 1 14 8A4 4 0 0 1 10 12A4 4 0 0 1 6 8A4 4 0 0 1 10 4M10 14C14.42 14 18 15.79 18 18V20H2V18C2 15.79 5.58 14 10 14M20 12V7H22V13H20M20 17V15H22V17H20Z"}
        ) 
      ]
    )
  }
}