import { h } from 'vue'
export default {
  name: "WaterCheck",
  vendor: "Mdi",
  tags: ["water","check"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-water-check","innerHTML":"<path d='M21.75 16.25L17 21L14.25 18L15.41 16.84L17 18.43L20.59 14.84L21.75 16.25M17.62 12C16.31 8.1 12 3.25 12 3.25S6 10 6 14C6 17.31 8.69 20 12 20H12.34C12.12 19.36 12 18.7 12 18C12 14.82 14.5 12.22 17.62 12Z' />"},
    )
  }
}