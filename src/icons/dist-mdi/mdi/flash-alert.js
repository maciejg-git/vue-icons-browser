import { h } from 'vue'
export default {
  name: "FlashAlert",
  vendor: "Mdi",
  tags: ["flash","alert"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-flash-alert","innerHTML":"<path d='M5,2V13H8V22L15,10H11L15,2M17,15H19V17H17V15M17,7H19V13H17V7Z' />"},
    )
  }
}