import { h } from 'vue'
export default {
  $_icon: {
    name: "HockeyPuck",
    vendor: "Fa",
    type: "Solid",
    tags: ["hockey","puck"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","class":"v-icon","fill":"currentColor","data-name":"fa-hockey-puck","innerHTML":"<path d='M0 160c0-53 114.6-96 256-96s256 43 256 96s-114.6 96-256 96S0 213 0 160zM255.1 303.1C156.4 303.1 56.73 283.4 0 242.2V352c0 53 114.6 96 256 96s256-43 256-96V242.2C455.3 283.4 355.6 303.1 255.1 303.1z'/>"},
    )
  }
}