import { h } from 'vue'
export default {
  name: "SortDescending",
  vendor: "Mdi",
  tags: ["sort","descending"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-sort-descending","innerHTML":"<path d='M19 7H22L18 3L14 7H17V21H19M2 17H12V19H2M6 5V7H2V5M2 11H9V13H2V11Z' />"},
    )
  }
}