import { h } from 'vue'
export default {
  $_icon: {
    name: "Neuter",
    vendor: "Fa",
    type: "Solid",
    tags: ["neuter"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-neuter"},
      [ 
        h(
          "path",
          {"d":"M368 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 86.26 62.1 157.9 144 172.1V496C160 504.8 167.2 512 176 512h32c8.838 0 16-7.164 16-16v-147C305.9 333.9 368 262.3 368 176zM192 272c-52.93 0-96-43.07-96-96c0-52.94 43.07-95.1 96-95.1c52.94 0 96 43.06 96 95.1C288 228.9 244.9 272 192 272z"}
        ) 
      ]
    )
  }
}