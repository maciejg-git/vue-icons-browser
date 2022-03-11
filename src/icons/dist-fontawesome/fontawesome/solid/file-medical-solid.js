import { h } from 'vue'
export default {
  $_icon: {
    name: "FileMedical",
    vendor: "Fa",
    type: "Solid",
    tags: ["file","medical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","class":"v-icon","fill":"currentColor","data-name":"fa-file-medical","innerHTML":"<path d='M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM288 301.7v36.57C288 345.9 281.9 352 274.3 352L224 351.1v50.29C224 409.9 217.9 416 210.3 416H173.7C166.1 416 160 409.9 160 402.3V351.1L109.7 352C102.1 352 96 345.9 96 338.3V301.7C96 294.1 102.1 288 109.7 288H160V237.7C160 230.1 166.1 224 173.7 224h36.57C217.9 224 224 230.1 224 237.7V288h50.29C281.9 288 288 294.1 288 301.7z'/>"},
    )
  }
}