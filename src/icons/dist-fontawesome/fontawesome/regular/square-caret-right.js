import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareCaretRight",
    vendor: "Fa",
    type: "",
    tags: ["square","caret","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","class":"v-icon","fill":"currentColor","data-name":"fa-square-caret-right","innerHTML":"<path d='M200.3 142.4C193.3 135.9 183.1 134.2 174.4 138C165.7 141.8 160 150.5 160 159.1v192C160 361.5 165.7 370.2 174.4 374c8.719 3.812 18.91 2.094 25.91-4.375l104-96C309.2 269.1 312 262.7 312 256s-2.812-13.09-7.719-17.62L200.3 142.4zM384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM400 416c0 8.82-7.18 16-16 16H64c-8.82 0-16-7.18-16-16V96c0-8.82 7.18-16 16-16h320c8.82 0 16 7.18 16 16V416z'/>"},
    )
  }
}