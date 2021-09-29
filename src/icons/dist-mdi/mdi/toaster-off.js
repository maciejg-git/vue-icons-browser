import { h } from 'vue'
export default {
  name: "ToasterOff",
  vendor: "Mdi",
  tags: ["toaster","off"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-toaster-off","innerHTML":"<path d='M20.8 22.7L18.1 20H3V13H2V11H3C3 9.9 3.9 9 5 9H7.1L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M15.3 12.1C15.6 11.5 16.3 11 17 11C18.1 11 19 11.9 19 13C19 13.8 18.6 14.4 17.9 14.7L21 17.8V13H22V11H21C21 9.9 20.1 9 19 9H12.2L15.3 12.1M18 8C17.6 5.8 15.1 4 12 4C10.6 4 9.2 4.4 8.2 5L11.2 8H18Z' />"},
    )
  }
}