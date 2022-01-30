import { h } from 'vue'
export default {
  $_icon: {
    name: "PrinterCheck",
    vendor: "Mdi",
    type: "",
    tags: ["printer","check"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-printer-check","innerHTML":"<path d='M18 7H6V3H18V7M6 21V17H2V11C2 9.34 3.34 8 5 8H19C20.66 8 22 9.34 22 11V13.81C21.12 13.3 20.1 13 19 13C17.77 13 16.64 13.37 15.69 14H8V19H13C13 19.7 13.13 20.37 13.35 21H6M18 11C18 11.55 18.45 12 19 12S20 11.55 20 11 19.55 10 19 10 18 10.45 18 11M23.5 17L22 15.5L18.5 19L16.5 17L15 18.5L18.5 22L23.5 17' />"},
    )
  }
}