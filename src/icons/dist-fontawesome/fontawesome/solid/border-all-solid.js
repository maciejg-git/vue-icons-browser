import { h } from 'vue'
export default {
  $_icon: {
    name: "BorderAll",
    vendor: "Fa",
    type: "Solid",
    tags: ["border","all"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","class":"v-icon","fill":"currentColor","data-name":"fa-border-all","innerHTML":"<path d='M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-32 64v128H256V96zm-192 0v128H64V96zM64 416V288h128v128zm192 0V288h128v128z'/>"},
    )
  }
}