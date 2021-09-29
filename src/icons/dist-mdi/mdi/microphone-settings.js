import { h } from 'vue'
export default {
  name: "MicrophoneSettings",
  vendor: "Mdi",
  tags: ["microphone","settings"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-microphone-settings","innerHTML":"<path d='M19,10H17.3C17.3,13 14.76,15.1 12,15.1C9.24,15.1 6.7,13 6.7,10H5C5,13.41 7.72,16.23 11,16.72V20H13V16.72C16.28,16.23 19,13.41 19,10M15,24H17V22H15M11,24H13V22H11M12,13A3,3 0 0,0 15,10V4A3,3 0 0,0 12,1A3,3 0 0,0 9,4V10A3,3 0 0,0 12,13M7,24H9V22H7V24Z' />"},
    )
  }
}