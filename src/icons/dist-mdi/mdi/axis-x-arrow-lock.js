import { h } from 'vue'
export default {
  $_icon: {
    name: "AxisXArrowLock",
    vendor: "Mdi",
    type: "",
    tags: ["axis","x","arrow","lock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-axis-x-arrow-lock"},
      [ 
        h(
          "path",
          {"d":"M21.8,5C22.4,5 23,5.6 23,6.3V9.8C23,10.4 22.4,11 21.7,11H16.2C15.6,11 15,10.4 15,9.7V6.2C15,5.6 15.6,5 16.2,5V3.5C16.2,2.1 17.6,1 19,1C20.4,1 21.8,2.1 21.8,3.5V5M20.5,5V3.5C20.5,2.7 19.8,2.2 19,2.2C18.31,2.2 17.69,2.58 17.54,3.2C17.5,3.29 17.5,3.39 17.5,3.5V5H20.5M1.74,19.25L3.21,13.79L4.67,16.32L9,13.82V3H11V13.82L20.39,19.25L19.39,21L10,15.56L5.67,18.06L7.21,20.71L1.74,19.25Z"}
        ) 
      ]
    )
  }
}