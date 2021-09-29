import { h } from 'vue'
export default {
  name: "EmailMinus",
  vendor: "Mdi",
  tags: ["email","minus"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-email-minus","innerHTML":"<path d='M3,4C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H14.09C14.03,19.67 14,19.34 14,19A6,6 0 0,1 20,13C20.34,13 20.67,13.03 21,13.09V6C21,4.89 20.1,4 19,4H3M3,6L11,11L19,6V8L11,13L3,8V6M16,18V20H24V18H16Z' />"},
    )
  }
}