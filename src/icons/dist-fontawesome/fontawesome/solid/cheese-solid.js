import { h } from 'vue'
export default {
  name: "CheeseSolid",
  vendor: "Fa",
  tags: ["cheese"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","class":"v-icon","fill":"currentColor","data-name":"fa-cheese","innerHTML":"<path d='M0 288v160a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V288zM299.83 32a32 32 0 0 0-21.13 7L0 256h512c0-119.89-94-217.8-212.17-224z'/>"},
    )
  }
}