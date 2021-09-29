import { h } from 'vue'
export default {
  name: "TankerTruck",
  vendor: "Mdi",
  tags: ["tanker","truck"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-tanker-truck","innerHTML":"<path d='M20 8H15V14H2V17H3C3 18.7 4.3 20 6 20S9 18.7 9 17H15C15 18.7 16.3 20 18 20S21 18.7 21 17H23V12L20 8M6 18.5C5.2 18.5 4.5 17.8 4.5 17S5.2 15.5 6 15.5 7.5 16.2 7.5 17 6.8 18.5 6 18.5M18 18.5C17.2 18.5 16.5 17.8 16.5 17S17.2 15.5 18 15.5 19.5 16.2 19.5 17 18.8 18.5 18 18.5M17 12V9.5H19.5L21.5 12H17M14 9.5C14 11.4 12.4 13 10.5 13H4.5C2.6 13 1 11.4 1 9.5S2.6 6 4.5 6H5V5H4V4H8V5H7V6H10.5C12.4 6 14 7.6 14 9.5Z' />"},
    )
  }
}