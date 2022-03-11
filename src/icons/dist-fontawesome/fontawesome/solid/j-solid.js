import { h } from 'vue'
export default {
  $_icon: {
    name: "J",
    vendor: "Fa",
    type: "Solid",
    tags: ["j"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","class":"v-icon","fill":"currentColor","data-name":"fa-j","innerHTML":"<path d='M320 64.01v259.4c0 86.36-71.78 156.6-160 156.6s-160-70.26-160-156.6V288c0-17.67 14.31-32 32-32s32 14.33 32 32v35.38c0 51.08 43.06 92.63 96 92.63s96-41.55 96-92.63V64.01c0-17.67 14.31-32 32-32S320 46.34 320 64.01z'/>"},
    )
  }
}