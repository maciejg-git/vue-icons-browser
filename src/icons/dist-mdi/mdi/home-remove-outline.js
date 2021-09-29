import { h } from 'vue'
export default {
  name: "HomeRemoveOutline",
  vendor: "Mdi",
  tags: ["home","remove","outline"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-home-remove-outline","innerHTML":"<path d='M12 2L2 12H4V21H20V12H22M12 5L18 11V19H6V11M14.12 10.46L15.54 11.88L13.41 14L15.54 16.12L14.12 17.54L12 15.41L9.88 17.54L8.47 16.12L10.59 14L8.47 11.88L9.88 10.47L12 12.59L14.12 10.46Z' />"},
    )
  }
}