import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarLock",
    vendor: "Mdi",
    type: "",
    tags: ["calendar","lock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-lock"},
      [ 
        h(
          "path",
          {"d":"M13 20C13 20.4 13.1 20.7 13.2 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1H18V3H19C20.1 3 21 3.9 21 5V10.8C20.4 10.4 19.7 10.2 19 10.1V8H5V19H13V20M22 16V20C22 20.5 21.5 21 21 21H16C15.4 21 15 20.5 15 20V16C15 15.5 15.4 15 16 15V14.5C16 13.1 17.1 12 18.5 12S21 13.1 21 14.5V15C21.5 15 22 15.5 22 16M20 14.5C20 13.7 19.3 13 18.5 13S17 13.7 17 14.5V15H20V14.5Z"}
        ) 
      ]
    )
  }
}