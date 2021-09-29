import { h } from 'vue'
export default {
  name: "StackExchange",
  vendor: "Mdi",
  tags: ["stack","exchange"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-stack-exchange","innerHTML":"<path d='M3.9 10.72H20V14.03H3.9V10.72M3.9 6.44H20V9.75H3.9V6.44M17.5 2H6.5C5.06 2 3.9 3.18 3.9 4.65V5.5H20V4.65C20 3.18 18.88 2 17.5 2M3.9 15V15.84C3.9 17.31 5.06 18.5 6.5 18.5H13.37V22L16.77 18.5H17.5C18.94 18.5 20.11 17.31 20.11 15.84V15H3.9Z' />"},
    )
  }
}