import { h } from 'vue'
export default {
  name: "ExpansionCard",
  vendor: "Mdi",
  tags: ["expansion","card"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-expansion-card","innerHTML":"<path d='M2,7V8.5H3V17H4.5V7C3.7,7 2.8,7 2,7M6,7V7L6,16H7V17H14V16H22V7H6M17.5,9A2.5,2.5 0 0,1 20,11.5A2.5,2.5 0 0,1 17.5,14A2.5,2.5 0 0,1 15,11.5A2.5,2.5 0 0,1 17.5,9Z' />"},
    )
  }
}