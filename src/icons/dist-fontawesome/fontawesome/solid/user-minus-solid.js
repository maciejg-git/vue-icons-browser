import { h } from 'vue'
export default {
  $_icon: {
    name: "UserMinus",
    vendor: "Fa",
    type: "Solid",
    tags: ["user","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","class":"v-icon","fill":"currentColor","data-name":"fa-user-minus","innerHTML":"<path d='M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM616 200h-144C458.8 200 448 210.8 448 224s10.75 24 24 24h144C629.3 248 640 237.3 640 224S629.3 200 616 200z'/>"},
    )
  }
}