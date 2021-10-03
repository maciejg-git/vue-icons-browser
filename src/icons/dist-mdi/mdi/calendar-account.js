import { h } from 'vue'
export default {
  name: "CalendarAccount",
  vendor: "Mdi",
  tags: ["calendar","account"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-calendar-account","innerHTML":"<path d='M12,10C14,10 15,12.42 13.59,13.84C12.17,15.26 9.75,14.25 9.75,12.25C9.75,11 10.75,10 12,10M16.5,19H7.5V17.88C7.5,16.63 9.5,15.63 12,15.63C14.5,15.63 16.5,16.63 16.5,17.88M19,20H5V9H19M16,2V4H8V2H6V4H5A2,2 0 0,0 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4H18V2H16Z' />"},
    )
  }
}