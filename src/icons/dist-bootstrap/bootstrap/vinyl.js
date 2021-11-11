import { h } from 'vue'
export default {
  name: "Vinyl",
  vendor: "B",
  type: "",
  tags: ["vinyl"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","class":"v-icon","viewBox":"0 0 16 16","data-name":"b-vinyl","innerHTML":"  <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/>  <path d='M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z'/>  <path d='M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'/>"},
    )
  }
}