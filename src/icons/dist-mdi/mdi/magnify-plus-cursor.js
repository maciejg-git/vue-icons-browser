import { h } from 'vue'
export default {
  $_icon: {
    name: "MagnifyPlusCursor",
    vendor: "Mdi",
    type: "",
    tags: ["magnify","plus","cursor"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-magnify-plus-cursor"},
      [ 
        h(
          "path",
          {"d":"M11,4A7,7 0 0,1 18,11C18,12.5 17.5,14 16.61,15.19L17.42,16H18L23,21L21,23L16,18V17.41L15.19,16.6C12.1,18.92 7.71,18.29 5.39,15.2C3.07,12.11 3.7,7.72 6.79,5.4C8,4.5 9.5,4 11,4M10,7V10H7V12H10V15H12V12H15V10H12V7H10M1,1V8L8,1H1Z"}
        ) 
      ]
    )
  }
}