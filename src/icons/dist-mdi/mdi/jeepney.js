import { h } from 'vue'
export default {
  name: "Jeepney",
  vendor: "Mdi",
  tags: ["jeepney"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-jeepney","innerHTML":"<path d='M19,13V7H20V4H4V7H5V13H2C2,13.93 2.5,14.71 3.5,14.93V20A1,1 0 0,0 4.5,21H5.5A1,1 0 0,0 6.5,20V19H17.5V20A1,1 0 0,0 18.5,21H19.5A1,1 0 0,0 20.5,20V14.93C21.5,14.7 22,13.93 22,13H19M8,15A1.5,1.5 0 0,1 6.5,13.5A1.5,1.5 0 0,1 8,12A1.5,1.5 0 0,1 9.5,13.5A1.5,1.5 0 0,1 8,15M16,15A1.5,1.5 0 0,1 14.5,13.5A1.5,1.5 0 0,1 16,12A1.5,1.5 0 0,1 17.5,13.5A1.5,1.5 0 0,1 16,15M17.5,10.5C15.92,10.18 14.03,10 12,10C9.97,10 8,10.18 6.5,10.5V7H17.5V10.5Z' />"},
    )
  }
}