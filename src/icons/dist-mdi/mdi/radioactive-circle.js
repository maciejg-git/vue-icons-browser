import { h } from 'vue'
export default {
  name: "RadioactiveCircle",
  vendor: "Mdi",
  tags: ["radioactive","circle"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-radioactive-circle","innerHTML":"<path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 10C13.11 10 14 10.9 14 12S13.11 14 12 14 10 13.11 10 12 10.9 10 12 10M4 12C4 8.7 6 5.87 8.86 4.64L10.34 8.36C8.96 9 8 10.38 8 12H4M12 20C10.46 20 9 19.56 7.8 18.8L10 15.47C10.6 15.81 11.28 16 12 16S13.4 15.81 14 15.47L16.2 18.8C15 19.56 13.54 20 12 20M16 12C16 10.38 15.04 9 13.66 8.36L15.15 4.64C18 5.87 20 8.7 20 12H16Z' />"},
    )
  }
}