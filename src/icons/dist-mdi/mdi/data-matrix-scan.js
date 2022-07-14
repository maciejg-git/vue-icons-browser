import { h } from 'vue'
export default {
  $_icon: {
    name: "DataMatrixScan",
    vendor: "Mdi",
    type: "",
    tags: ["data","matrix","scan"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-data-matrix-scan"},
      [ 
        h(
          "path",
          {"d":"M2 2H6V0H2C.9 0 0 .9 0 2V6H2V2M22 0H18V2H22V6H24V2C24 .9 23.1 0 22 0M2 18H0V22C0 23.1 .9 24 2 24H6V22H2V18M22 22H18V24H22C23.1 24 24 23.1 24 22V18H22V22M8 6V4H10V6H8M10 14V12H12V14H10M16 4H18V6H16V4M18 6H20V8H18V6M18 14H20V16H18V14M20 12H16V18H20V20H4V4H6V6H8V10H6V12H8V14H10V16H12V18H14V16H12V14H14V10H10V6H12V4H14V8H16V10H20V12M8 18V16H6V18H8Z"}
        ) 
      ]
    )
  }
}