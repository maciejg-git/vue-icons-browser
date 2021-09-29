import { h } from 'vue'
export default {
  name: "FlagOff",
  vendor: "Mdi",
  tags: ["flag","off"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-flag-off","innerHTML":"<path d='M20.84 22.73L14.11 16H13L12.72 14.61L12.11 14H7V21H5V6.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M20 16V6H14.4L14 4H7.2L19.2 16H20' />"},
    )
  }
}