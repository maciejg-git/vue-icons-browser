import { h } from 'vue'
export default {
  name: "StairsBox",
  vendor: "Mdi",
  tags: ["stairs","box"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-stairs-box","innerHTML":"<path d='M5 3C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3H5M14 7H19V9H16V12H13V15H10V18H5V16H8V13H11V10H14V7Z' />"},
    )
  }
}