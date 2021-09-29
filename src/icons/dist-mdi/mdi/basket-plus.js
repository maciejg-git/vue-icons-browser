import { h } from 'vue'
export default {
  name: "BasketPlus",
  vendor: "Mdi",
  tags: ["basket","plus"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-basket-plus","innerHTML":"<path d='M20 15V18H23V20H20V23H18V20H15V18H18V15H20M23 10L22.96 10.29L22 13.8C21.11 13.29 20.09 13 19 13C15.69 13 13 15.69 13 19C13 19.7 13.13 20.37 13.35 21H5.5C4.72 21 4.04 20.55 3.71 19.9L1.1 10.44L1 10C1 9.45 1.45 9 2 9H6.58L11.18 2.43C11.36 2.17 11.66 2 12 2S12.65 2.17 12.83 2.44L17.42 9H22C22.55 9 23 9.45 23 10M14 15C14 13.9 13.11 13 12 13S10 13.9 10 15 10.9 17 12 17 14 16.11 14 15M15 9L12 4.74L9 9H15Z' />"},
    )
  }
}