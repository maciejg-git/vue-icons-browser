import { h } from 'vue'
export default {
  $_icon: {
    name: "HeadphonesSettings",
    vendor: "Mdi",
    type: "",
    tags: ["headphones","settings"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-headphones-settings","innerHTML":"<path d='M12,1A9,9 0 0,1 21,10V17A3,3 0 0,1 18,20H15V12H19V10A7,7 0 0,0 12,3A7,7 0 0,0 5,10V12H9V20H6A3,3 0 0,1 3,17V10A9,9 0 0,1 12,1M15,24V22H17V24H15M11,24V22H13V24H11M7,24V22H9V24H7Z' />"},
    )
  }
}