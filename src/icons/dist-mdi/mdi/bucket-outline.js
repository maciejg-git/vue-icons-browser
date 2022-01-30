import { h } from 'vue'
export default {
  $_icon: {
    name: "BucketOutline",
    vendor: "Mdi",
    type: "",
    tags: ["bucket","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-bucket-outline","innerHTML":"<path d='M3 4H21V7H20L17.5 21H6.5L4 7H3V4M17.97 7H6.03L8.15 19H15.85L17.97 7Z' />"},
    )
  }
}