import { h } from 'vue'
export default {
  $_icon: {
    name: "CropSimple",
    vendor: "Fa",
    type: "Solid",
    tags: ["crop","simple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","class":"v-icon","fill":"currentColor","data-name":"fa-crop-simple","innerHTML":"<path d='M128 384H352V448H128C92.65 448 64 419.3 64 384V128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H64V32C64 14.33 78.33 0 96 0C113.7 0 128 14.33 128 32V384zM384 128H160V64H384C419.3 64 448 92.65 448 128V384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H448V480C448 497.7 433.7 512 416 512C398.3 512 384 497.7 384 480V128z'/>"},
    )
  }
}