import { h } from 'vue'
export default {
  $_icon: {
    name: "Pager",
    vendor: "Fa",
    type: "Solid",
    tags: ["pager"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","class":"v-icon","fill":"currentColor","data-name":"fa-pager","innerHTML":"<path d='M448 64H64C28.63 64 0 92.63 0 128v256c0 35.38 28.62 64 64 64h384c35.38 0 64-28.62 64-64V128C512 92.63 483.4 64 448 64zM160 368H80C71.13 368 64 360.9 64 352v-16C64 327.1 71.13 320 80 320H160V368zM288 352c0 8.875-7.125 16-16 16H192V320h80c8.875 0 16 7.125 16 16V352zM448 224c0 17.62-14.38 32-32 32H96C78.38 256 64 241.6 64 224V160c0-17.62 14.38-32 32-32h320c17.62 0 32 14.38 32 32V224z'/>"},
    )
  }
}