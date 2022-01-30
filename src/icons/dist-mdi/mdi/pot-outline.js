import { h } from 'vue'
export default {
  $_icon: {
    name: "PotOutline",
    vendor: "Mdi",
    type: "",
    tags: ["pot","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-pot-outline","innerHTML":"<path d='M3 10V12H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V12H21V10H3M7 12H17V19H7V12Z' />"},
    )
  }
}