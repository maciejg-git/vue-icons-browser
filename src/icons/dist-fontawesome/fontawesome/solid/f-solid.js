import { h } from 'vue'
export default {
  $_icon: {
    name: "F",
    vendor: "Fa",
    type: "Solid",
    tags: ["f"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","class":"v-icon","fill":"currentColor","data-name":"fa-f","innerHTML":"<path d='M320 64.01c0 17.67-14.33 32-32 32H64v128h160c17.67 0 32 14.32 32 31.1s-14.33 32-32 32H64v160c0 17.67-14.33 32-32 32s-32-14.33-32-32v-384C0 46.34 14.33 32.01 32 32.01h256C305.7 32.01 320 46.34 320 64.01z'/>"},
    )
  }
}