import { h } from 'vue'
export default {
  $_icon: {
    name: "ForwardFast",
    vendor: "Fa",
    type: "Solid",
    tags: ["forward","fast"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","class":"v-icon","fill":"currentColor","data-name":"fa-forward-fast","innerHTML":"<path d='M512 96.03v319.9c0 17.67-14.33 31.1-31.1 31.1C462.3 447.1 448 433.6 448 415.1V284.1l-171.5 156.5C255.9 457.7 224 443.3 224 415.1V284.1l-171.5 156.5C31.88 457.7 0 443.3 0 415.1V96.03c0-27.37 31.88-41.74 52.5-24.62L224 226.8V96.03c0-27.37 31.88-41.74 52.5-24.62L448 226.8V96.03c0-17.67 14.33-31.1 31.1-31.1C497.7 64.03 512 78.36 512 96.03z'/>"},
    )
  }
}