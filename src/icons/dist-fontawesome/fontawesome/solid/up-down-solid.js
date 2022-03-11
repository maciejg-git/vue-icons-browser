import { h } from 'vue'
export default {
  $_icon: {
    name: "UpDown",
    vendor: "Fa",
    type: "Solid",
    tags: ["up","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 512","class":"v-icon","fill":"currentColor","data-name":"fa-up-down","innerHTML":"<path d='M249.6 392.3l-104 112c-9.094 9.781-26.09 9.781-35.19 0l-103.1-112c-6.484-6.984-8.219-17.17-4.406-25.92S14.45 352 24 352H80V160H24C14.45 160 5.812 154.3 1.999 145.6C-1.813 136.8-.0781 126.7 6.406 119.7l104-112c9.094-9.781 26.09-9.781 35.19 0l104 112c6.484 6.984 8.219 17.17 4.406 25.92C250.2 154.3 241.5 160 232 160H176v192h56c9.547 0 18.19 5.656 22 14.41S256.1 385.3 249.6 392.3z'/>"},
    )
  }
}