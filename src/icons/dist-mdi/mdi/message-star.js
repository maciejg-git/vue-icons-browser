import { h } from 'vue'
export default {
  name: "MessageStar",
  vendor: "Mdi",
  tags: ["message","star"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-message-star","innerHTML":"<path d='M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M14.6 14L12 12.4L9.4 14L10.1 11L7.8 9L10.8 8.7L12 6L13.2 8.8L16.2 9.1L13.9 11.1L14.6 14Z' />"},
    )
  }
}