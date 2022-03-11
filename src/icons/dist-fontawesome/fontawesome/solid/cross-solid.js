import { h } from 'vue'
export default {
  $_icon: {
    name: "Cross",
    vendor: "Fa",
    type: "Solid",
    tags: ["cross"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","class":"v-icon","fill":"currentColor","data-name":"fa-cross","innerHTML":"<path d='M383.1 160v64c0 17.62-14.37 32-31.1 32h-96v224c0 17.62-14.38 32-31.1 32H160c-17.62 0-32-14.38-32-32V256h-96C14.37 256-.0008 241.6-.0008 224V160c0-17.62 14.38-32 32-32h96V32c0-17.62 14.38-32 32-32h64c17.62 0 31.1 14.38 31.1 32v96h96C369.6 128 383.1 142.4 383.1 160z'/>"},
    )
  }
}