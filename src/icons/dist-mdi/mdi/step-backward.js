import { h } from 'vue'
export default {
  name: "StepBackward",
  vendor: "Mdi",
  tags: ["step","backward"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-step-backward","innerHTML":"<path d='M19,5V19H16V5M14,5V19L3,12' />"},
    )
  }
}