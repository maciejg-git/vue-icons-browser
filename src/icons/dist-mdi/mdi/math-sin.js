import { h } from 'vue'
export default {
  name: "MathSin",
  vendor: "Mdi",
  type: "",
  tags: ["math","sin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-math-sin","innerHTML":"<path d='M4,7A2,2 0 0,0 2,9V11A2,2 0 0,0 4,13H6V15H2V17H6A2,2 0 0,0 8,15V13A2,2 0 0,0 6,11H4V9H8V7H4M14,7V9H13V15H14V17H10V15H11V9H10V7H14M16,7V17H18V12L20,17H22V7H20V12L18,7H16Z' />"},
    )
  }
}