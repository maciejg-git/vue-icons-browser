import { h } from 'vue'
export default {
  name: "GlassCocktail",
  vendor: "Mdi",
  type: "",
  tags: ["glass","cocktail"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-glass-cocktail","innerHTML":"<path d='M7.5,7L5.5,5H18.5L16.5,7M11,13V19H6V21H18V19H13V13L21,5V3H3V5L11,13Z' />"},
    )
  }
}