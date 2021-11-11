import { h } from 'vue'
export default {
  name: "FolderClock",
  vendor: "Mdi",
  type: "",
  tags: ["folder","clock"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-folder-clock","innerHTML":"<path d='M3,4C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H10.26C11.57,21.88 13.71,23 16,23A7,7 0 0,0 23,16C23,14.17 22.28,12.42 21,11.11V8C21,6.89 20.1,6 19,6H11L9,4H3M16,11A5,5 0 0,1 21,16A5,5 0 0,1 16,21A5,5 0 0,1 11,16A5,5 0 0,1 16,11M15,12V17L18.61,19.16L19.36,17.94L16.5,16.25V12H15Z' />"},
    )
  }
}