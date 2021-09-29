import { h } from 'vue'
export default {
  name: "DoorClosedSolid",
  vendor: "Fa",
  tags: ["door","closed"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","class":"fa-icon","fill":"currentColor","data-name":"fa-door-closed","innerHTML":"<path d='M624 448H512V50.8C512 22.78 490.47 0 464 0H175.99c-26.47 0-48 22.78-48 50.8V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM415.99 288c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32c.01 17.67-14.32 32-32 32z'/>"},
    )
  }
}