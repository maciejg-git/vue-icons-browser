import { h } from 'vue'
export default {
  name: "LightbulbAuto",
  vendor: "Mdi",
  tags: ["lightbulb","auto"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-lightbulb-auto","innerHTML":"<path d='M9 2C5.13 2 2 5.13 2 9C2 11.38 3.19 13.47 5 14.74V17C5 17.55 5.45 18 6 18H12C12.55 18 13 17.55 13 17V14.74C14.81 13.47 16 11.38 16 9C16 5.13 12.87 2 9 2M6 21C6 21.55 6.45 22 7 22H11C11.55 22 12 21.55 12 21V20H6V21M19 13H17L13.8 22H15.7L16.4 20H19.6L20.3 22H22.2L19 13M16.85 18.65L18 15L19.15 18.65H16.85Z' />"},
    )
  }
}