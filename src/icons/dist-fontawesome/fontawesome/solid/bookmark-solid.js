import { h } from 'vue'
export default {
  $_icon: {
    name: "Bookmark",
    vendor: "Fa",
    type: "Solid",
    tags: ["bookmark"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","class":"v-icon","fill":"currentColor","data-name":"fa-bookmark","innerHTML":"<path d='M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z'/>"},
    )
  }
}