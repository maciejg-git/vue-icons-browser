import { h } from 'vue'
export default {
  name: "ViewHeadline",
  vendor: "Mdi",
  tags: ["view","headline"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-view-headline","innerHTML":"<path d='M4,5V7H21V5M4,11H21V9H4M4,19H21V17H4M4,15H21V13H4V15Z' />"},
    )
  }
}