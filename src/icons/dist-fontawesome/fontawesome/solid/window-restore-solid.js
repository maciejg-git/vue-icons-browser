import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowRestore",
    vendor: "Fa",
    type: "Solid",
    tags: ["window","restore"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-window-restore"},
      [ 
        h(
          "path",
          {"d":"M432 64H208C199.2 64 192 71.16 192 80V96H128V80C128 35.82 163.8 0 208 0H432C476.2 0 512 35.82 512 80V304C512 348.2 476.2 384 432 384H416V320H432C440.8 320 448 312.8 448 304V80C448 71.16 440.8 64 432 64zM0 192C0 156.7 28.65 128 64 128H320C355.3 128 384 156.7 384 192V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V192zM96 256H288C305.7 256 320 241.7 320 224C320 206.3 305.7 192 288 192H96C78.33 192 64 206.3 64 224C64 241.7 78.33 256 96 256z"}
        ) 
      ]
    )
  }
}