import { h } from 'vue'
export default {
  name: "BreadSliceOutline",
  vendor: "Mdi",
  tags: ["bread","slice","outline"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-bread-slice-outline","innerHTML":"<path d='M12,2C17.5,2 22,5.36 22,9.5C22,11.19 21.26,12.75 20,14V22H4V14C2.74,12.75 2,11.19 2,9.5C2,5.36 6.5,2 12,2M18,13.14C19.24,12.17 20,10.89 20,9.5C20,6.46 16.42,4 12,4C7.58,4 4,6.46 4,9.5C4,10.89 4.76,12.17 6,13.14V20H18V13.14M8,18V14H12V18H8Z' />"},
    )
  }
}