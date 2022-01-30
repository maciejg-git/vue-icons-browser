import { h } from 'vue'
export default {
  $_icon: {
    name: "UnicornVariant",
    vendor: "Mdi",
    type: "",
    tags: ["unicorn","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-unicorn-variant","innerHTML":"<path d='M20 12V19L17 20L14 15.33C13.71 14.89 13 15.14 13.08 15.67L14 23L4 18L4.96 12.75C5.56 9.42 8.46 7 11.84 7H13L19 1L17 7H20L18.42 9.37C19.36 9.88 20 10.86 20 12Z' />"},
    )
  }
}