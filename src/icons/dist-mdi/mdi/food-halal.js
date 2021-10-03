import { h } from 'vue'
export default {
  name: "FoodHalal",
  vendor: "Mdi",
  tags: ["food","halal"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-food-halal","innerHTML":"<path d='M7 5V15C7 16.11 6.11 17 5 17H4C3.45 17 3 16.55 3 16V13H1V16C1 17.66 2.34 19 4 19H5C7.21 19 9 17.21 9 15V5M23 13.38L21.77 12.15C21.03 11.41 20.04 11 19 11H17V13H19C19.5 13 20 13.2 20.35 13.56L20.7 13.91L19.5 14.6C19.04 14.86 18.53 15 18 15H17C16.44 15 16 14.56 16 14V6H14V9.81L13.38 9.12C12.7 8.37 11.6 8 10.59 8H10V10H10.59C11.23 10 11.84 10.25 12.29 10.71L14 12.41V14C14 15.12 13.12 16 12 16H10V18H12C13.37 18 14.5 17.3 15.17 16.24C15.63 16.71 16.25 17 17 17H18C18.88 17 19.74 16.77 20.5 16.33L23 14.89Z' />"},
    )
  }
}