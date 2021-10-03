import { h } from 'vue'
export default {
  name: "WineGlassSolid",
  vendor: "Fa",
  tags: ["wine","glass"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 288 512","class":"v-icon","fill":"currentColor","data-name":"fa-wine-glass","innerHTML":"<path d='M216 464h-40V346.81c68.47-15.89 118.05-79.91 111.4-154.16l-15.95-178.1C270.71 6.31 263.9 0 255.74 0H32.26c-8.15 0-14.97 6.31-15.7 14.55L.6 192.66C-6.05 266.91 43.53 330.93 112 346.82V464H72c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h208c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40z'/>"},
    )
  }
}