import { h } from 'vue'
export default {
  name: "BluetoothBBrand",
  vendor: "Fa",
  tags: ["bluetooth","b"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","class":"fa-icon","fill":"currentColor","data-name":"fa-bluetooth-b","innerHTML":"<path d='M196.48 260.023l92.626-103.333L143.125 0v206.33l-86.111-86.111-31.406 31.405 108.061 108.399L25.608 368.422l31.406 31.405 86.111-86.111L145.84 512l148.552-148.644-97.912-103.333zm40.86-102.996l-49.977 49.978-.338-100.295 50.315 50.317zM187.363 313.04l49.977 49.978-50.315 50.316.338-100.294z'/>"},
    )
  }
}