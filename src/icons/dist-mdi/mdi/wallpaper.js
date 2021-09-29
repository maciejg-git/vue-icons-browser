import { h } from 'vue'
export default {
  name: "Wallpaper",
  vendor: "Mdi",
  tags: ["wallpaper"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-wallpaper","innerHTML":"<path d='M4,4H11V2H4A2,2 0 0,0 2,4V11H4V4M10,13L6,18H18L15,14L12.97,16.71L10,13M17,8.5A1.5,1.5 0 0,0 15.5,7A1.5,1.5 0 0,0 14,8.5A1.5,1.5 0 0,0 15.5,10A1.5,1.5 0 0,0 17,8.5M20,2H13V4H20V11H22V4A2,2 0 0,0 20,2M20,20H13V22H20A2,2 0 0,0 22,20V13H20V20M4,13H2V20A2,2 0 0,0 4,22H11V20H4V13Z' />"},
    )
  }
}