import { h } from 'vue'
export default {
  name: "WeatherCloudyClock",
  vendor: "Mdi",
  tags: ["weather","cloudy","clock"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-weather-cloudy-clock","innerHTML":"<path d='M15 13H16.5V15.82L18.94 17.23L18.19 18.53L15 16.69V13M18.13 9.33C17.23 6.81 14.83 5 12 5C9.3 5 7 6.65 6 9C3.24 9 1 11.24 1 14S3.24 19 6 19H9.68C10.81 21.36 13.21 23 16 23C19.87 23 23 19.87 23 16C23 12.88 20.96 10.24 18.13 9.33M6 17C4.34 17 3 15.66 3 14S4.34 11 6 11C6.37 11 6.73 11.07 7.06 11.19C7.45 8.82 9.5 7 12 7C13.63 7 15.07 7.79 16 9C12.12 9 9 12.14 9 16C9 16.34 9.03 16.67 9.08 17H6M16 21C13.24 21 11 18.76 11 16S13.24 11 16 11 21 13.24 21 16 18.76 21 16 21Z' />"},
    )
  }
}