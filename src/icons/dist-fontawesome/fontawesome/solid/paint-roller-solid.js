import { h } from 'vue'
export default {
  $_icon: {
    name: "PaintRoller",
    vendor: "Fa",
    type: "Solid",
    tags: ["paint","roller"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","class":"v-icon","fill":"currentColor","data-name":"fa-paint-roller","innerHTML":"<path d='M0 64C0 28.65 28.65 0 64 0H352C387.3 0 416 28.65 416 64V128C416 163.3 387.3 192 352 192H64C28.65 192 0 163.3 0 128V64zM160 352C160 334.3 174.3 320 192 320V304C192 259.8 227.8 224 272 224H416C433.7 224 448 209.7 448 192V69.46C485.3 82.64 512 118.2 512 160V192C512 245 469 288 416 288H272C263.2 288 256 295.2 256 304V320C273.7 320 288 334.3 288 352V480C288 497.7 273.7 512 256 512H192C174.3 512 160 497.7 160 480V352z'/>"},
    )
  }
}