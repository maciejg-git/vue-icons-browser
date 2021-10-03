import { h } from 'vue'
export default {
  name: "HammerScrewdriver",
  vendor: "Mdi",
  tags: ["hammer","screwdriver"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-hammer-screwdriver","innerHTML":"<path d='M16.06 13.09L21.69 18.68L18.37 21.96L12.78 16.37V15.45L15.14 13.09H16.06M16.97 10.56L16 9.6L11.21 14.4V16.37L5.58 22L2.3 18.68L7.89 13.09H9.86L10.64 12.31L6.8 8.46H5.5L2.69 5.62L5.31 3L8.11 5.8V7.11L12 10.95L14.66 8.29L13.7 7.28L15 5.97H12.34L11.69 5.32L15 2L15.66 2.66V5.32L16.97 4L20.25 7.28C21.34 8.38 21.34 10.17 20.25 11.26L18.28 9.25L16.97 10.56Z' />"},
    )
  }
}