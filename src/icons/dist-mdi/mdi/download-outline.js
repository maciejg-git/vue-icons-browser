import { h } from 'vue'
export default {
  $_icon: {
    name: "DownloadOutline",
    vendor: "Mdi",
    type: "",
    tags: ["download","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-download-outline","innerHTML":"<path d='M13,5V11H14.17L12,13.17L9.83,11H11V5H13M15,3H9V9H5L12,16L19,9H15V3M19,18H5V20H19V18Z' />"},
    )
  }
}