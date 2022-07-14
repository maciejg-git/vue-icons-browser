import { h } from 'vue'
export default {
  $_icon: {
    name: "Nativescript",
    vendor: "Mdi",
    type: "",
    tags: ["nativescript"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-nativescript"},
      [ 
        h(
          "path",
          {"d":"M7.5,3H16.5C19,3 21,5 21,7.5V16.5C21,19 19,21 16.5,21H7.5C5,21 3,19 3,16.5V7.5C3,5 5,3 7.5,3M6,13.5V16.5A1.5,1.5 0 0,0 7.5,18H9V10.5L15,18H16.5A1.5,1.5 0 0,0 18,16.5V13.5A1.5,1.5 0 0,1 19.5,12A1.5,1.5 0 0,1 18,10.5V7.5A1.5,1.5 0 0,0 16.5,6H15V13.5L9,6H7.5A1.5,1.5 0 0,0 6,7.5V10.5A1.5,1.5 0 0,1 4.5,12A1.5,1.5 0 0,1 6,13.5Z"}
        ) 
      ]
    )
  }
}