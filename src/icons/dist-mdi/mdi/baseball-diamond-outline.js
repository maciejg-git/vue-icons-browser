import { h } from 'vue'
export default {
  name: "BaseballDiamondOutline",
  vendor: "Mdi",
  tags: ["baseball","diamond","outline"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-baseball-diamond-outline","innerHTML":"<path d='M12 2C5 2 1 9 1 9L9.3 17.3C9.74 16.77 10.32 16.37 11 16.17L7.83 13L12 8.83L16.17 13L13 16.17C13.68 16.37 14.27 16.77 14.7 17.3L23 9C23 9 19 2 12 2M17.59 11.59L12 6L6.41 11.59L3.59 8.76C4.95 7 7.89 4 12 4C16.08 4 19.03 7 20.4 8.77L17.59 11.59M13 13C13 13.55 12.55 14 12 14S11 13.55 11 13 11.45 12 12 12 13 12.45 13 13M13.5 20L12 21L10.5 20V18H13.5V20Z' />"},
    )
  }
}