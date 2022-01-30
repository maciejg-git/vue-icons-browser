import { h } from 'vue'
export default {
  $_icon: {
    name: "CubeSend",
    vendor: "Mdi",
    type: "",
    tags: ["cube","send"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-cube-send","innerHTML":"<path d='M16,4L9,8.04V15.96L16,20L23,15.96V8.04M16,6.31L19.8,8.5L16,10.69L12.21,8.5M0,7V9H7V7M11,10.11L15,12.42V17.11L11,14.81M21,10.11V14.81L17,17.11V12.42M2,11V13H7V11M4,15V17H7V15' />"},
    )
  }
}