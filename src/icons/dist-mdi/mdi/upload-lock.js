import { h } from 'vue'
export default {
  name: "UploadLock",
  vendor: "Mdi",
  tags: ["upload","lock"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-upload-lock","innerHTML":"<path d='M22 22H17C16.5 22 16 21.5 16 21V17C16 16.5 16.5 16 17 16V14.5C17 13.1 18.1 12 19.5 12C20.9 12 22 13.1 22 14.5V16C22.5 16 23 16.5 23 17V21C23 21.5 22.5 22 22 22M14 20H5V18H14V20M21 16V14.5C21 13.7 20.3 13 19.5 13C18.7 13 18 13.7 18 14.5V16H21M15 16H9V10H5L12 3L19 10H15V16Z' />"},
    )
  }
}