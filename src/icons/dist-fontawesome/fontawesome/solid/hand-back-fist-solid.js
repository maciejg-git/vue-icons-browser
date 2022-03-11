import { h } from 'vue'
export default {
  $_icon: {
    name: "HandBackFist",
    vendor: "Fa",
    type: "Solid",
    tags: ["hand","back","fist"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","class":"v-icon","fill":"currentColor","data-name":"fa-hand-back-fist","innerHTML":"<path d='M448 144v120.4C448 314.2 422.6 358.1 384 384v128H128v-128l-53.19-38.67C48 325.8 32 294.3 32 261.2V192c0-14.58 6.625-28.38 17.1-37.48L80 130.5V176C80 184.8 87.16 192 96 192s16-7.164 16-16v-128C112 21.48 133.5 0 160 0c25.38 0 45.96 19.77 47.67 44.73C216.2 36.9 227.5 32 240 32C266.5 32 288 53.48 288 80v5.531C296.6 72.57 311.3 64 328 64c23.47 0 42.94 16.87 47.11 39.14C382.4 98.7 390.9 96 400 96C426.5 96 448 117.5 448 144z'/>"},
    )
  }
}