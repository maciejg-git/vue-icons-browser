import { h } from 'vue'
export default {
  name: "PauseCircleFill",
  vendor: "B",
  type: "",
  tags: ["pause","circle","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","class":"v-icon","viewBox":"0 0 16 16","data-name":"b-pause-circle-fill","innerHTML":"  <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z'/>"},
    )
  }
}