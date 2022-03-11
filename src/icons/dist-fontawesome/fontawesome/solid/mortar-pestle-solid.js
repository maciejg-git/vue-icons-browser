import { h } from 'vue'
export default {
  $_icon: {
    name: "MortarPestle",
    vendor: "Fa",
    type: "Solid",
    tags: ["mortar","pestle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","class":"v-icon","fill":"currentColor","data-name":"fa-mortar-pestle","innerHTML":"<path d='M501.5 60.87c17.25-17.12 12.5-46.25-9.25-57.13c-12.12-6-26.5-4.75-37.38 3.375L251.1 159.1h151.4L501.5 60.87zM496 191.1h-480c-8.875 0-16 7.125-16 16v32c0 8.875 7.125 16 16 16L31.1 256c0 81 50.25 150.1 121.1 178.4c-12.75 16.88-21.75 36.75-25 58.63C126.8 502.9 134.2 512 144.2 512h223.5c10 0 17.51-9.125 16.13-19c-3.25-21.88-12.25-41.75-25-58.63C429.8 406.1 479.1 337 479.1 256L496 255.1c8.875 0 16-7.125 16-16v-32C512 199.1 504.9 191.1 496 191.1z'/>"},
    )
  }
}