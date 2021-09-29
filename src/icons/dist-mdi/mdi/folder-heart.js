import { h } from 'vue'
export default {
  name: "FolderHeart",
  vendor: "Mdi",
  tags: ["folder","heart"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-folder-heart","innerHTML":"<path d='M20 6H12L10 4H4C2.89 4 2 4.89 2 6V18C2 19.1 2.89 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6M18.42 13.5L15 17L11.59 13.5C11.22 13.12 11 12.62 11 12.05C11 10.92 11.9 10 13 10C13.54 10 14.05 10.23 14.42 10.61L15 11.2L15.59 10.6C15.95 10.23 16.46 10 17 10C18.1 10 19 10.92 19 12.05C19 12.61 18.78 13.13 18.42 13.5Z' />"},
    )
  }
}