import { h } from 'vue'
export default {
  $_icon: {
    name: "N",
    vendor: "Fa",
    type: "Solid",
    tags: ["n"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","class":"v-icon","fill":"currentColor","data-name":"fa-n","innerHTML":"<path d='M384 64.01v384c0 13.47-8.438 25.5-21.09 30.09C359.3 479.4 355.7 480 352 480c-9.312 0-18.38-4.078-24.59-11.52L64 152.4v295.6c0 17.67-14.31 32-32 32s-32-14.33-32-32v-384c0-13.47 8.438-25.5 21.09-30.09c12.62-4.516 26.84-.75 35.5 9.609L320 359.6v-295.6c0-17.67 14.31-32 32-32S384 46.34 384 64.01z'/>"},
    )
  }
}