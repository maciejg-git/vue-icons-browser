import { h } from 'vue'
export default {
  name: "CarArrowRight",
  vendor: "Mdi",
  type: "",
  tags: ["car","arrow","right"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-car-arrow-right","innerHTML":"<path d='M12 18C12 14.69 14.69 12 18 12C19.09 12 20.12 12.3 21 12.81V12L18.92 6C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H12.09C12.04 18.67 12 18.34 12 18M6.5 6.5H17.5L19 11H5L6.5 6.5M6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16M19 21V19H15V17H19V15L22 18L19 21' />"},
    )
  }
}