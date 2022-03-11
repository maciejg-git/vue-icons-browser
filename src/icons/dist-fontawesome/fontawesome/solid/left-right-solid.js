import { h } from 'vue'
export default {
  $_icon: {
    name: "LeftRight",
    vendor: "Fa",
    type: "Solid",
    tags: ["left","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","class":"v-icon","fill":"currentColor","data-name":"fa-left-right","innerHTML":"<path d='M503.1 273.6l-112 104c-6.984 6.484-17.17 8.219-25.92 4.406s-14.41-12.45-14.41-22v-56l-192 .001V360c0 9.547-5.656 18.19-14.41 22c-8.75 3.812-18.94 2.078-25.92-4.406l-112-104c-9.781-9.094-9.781-26.09 0-35.19l112-104c6.984-6.484 17.17-8.219 25.92-4.406C154 133.8 159.7 142.5 159.7 152v55.1l192-.001v-56c0-9.547 5.656-18.19 14.41-22s18.94-2.078 25.92 4.406l112 104C513.8 247.5 513.8 264.5 503.1 273.6z'/>"},
    )
  }
}