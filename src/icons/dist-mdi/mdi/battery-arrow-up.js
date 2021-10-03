import { h } from 'vue'
export default {
  name: "BatteryArrowUp",
  vendor: "Mdi",
  tags: ["battery","arrow","up"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-battery-arrow-up","innerHTML":"<path d='M13.54 22H7.33C6.6 22 6 21.4 6 20.67V5.33C6 4.6 6.6 4 7.33 4H9V2H15V4H16.67C17.4 4 18 4.6 18 5.33V12C14.69 12 12 14.69 12 18C12 19.54 12.58 20.94 13.54 22M20.94 17.5L17.94 14.5L14.94 17.5H16.94V21.5H18.94V17.5H20.94' />"},
    )
  }
}