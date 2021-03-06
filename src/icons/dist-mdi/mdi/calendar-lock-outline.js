import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarLockOutline",
    vendor: "Mdi",
    type: "",
    tags: ["calendar","lock","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-lock-outline"},
      [ 
        h(
          "path",
          {"d":"M13 19H5V9H19V10.1C19.7 10.2 20.4 10.4 21 10.8V5C21 3.9 20.1 3 19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H13.2C13.1 20.7 13 20.4 13 20V19M5 5H19V7H5V5M21 15V14.5C21 13.1 19.9 12 18.5 12S16 13.1 16 14.5V15C15.4 15 15 15.5 15 16V20C15 20.5 15.4 21 16 21H21C21.5 21 22 20.5 22 20V16C22 15.5 21.5 15 21 15M20 15H17V14.5C17 13.7 17.7 13 18.5 13S20 13.7 20 14.5V15Z"}
        ) 
      ]
    )
  }
}