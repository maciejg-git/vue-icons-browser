import { h } from 'vue'
export default {
  $_icon: {
    name: "Bacteria",
    vendor: "Fa",
    type: "Solid",
    tags: ["bacteria"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","class":"v-icon","fill":"currentColor","data-name":"fa-bacteria","innerHTML":"<path d='M627.3 227.3c9.439-2.781 14.81-12.65 12-22.04c-3.039-10.21-13.57-14.52-22.14-11.95l-11.27 3.33c-8.086-15.15-20.68-27.55-36.4-35.43l2.888-11.06c1.867-7.158-1.9-22.19-17.26-22.19c-7.92 0-15.14 5.288-17.23 13.28l-2.865 10.97c-7.701-.2793-26.9-.6485-48.75 13.63L477.6 157.1c-3.777-3.873-15.44-9.779-25.19-.3691c-7.062 6.822-7.225 18.04-.3711 25.07l9.14 9.373c-11.96 18.85-10.27 28.38-15.88 46.61c-8.023-3.758-11.44-5.943-16.66-5.943c-6.689 0-13.09 3.763-16.13 10.19c-4.188 8.856-.3599 19.42 8.546 23.58l8.797 4.115c-14.91 22.05-34.42 33.57-34.83 33.83l-3.922-8.855C387.2 285.8 376.7 281.7 367.7 285.6c-9 3.959-13.08 14.42-9.115 23.39l4.041 9.127c-16.38 4.559-27.93 4.345-46.15 16.94l-9.996-9.012c-6.969-6.303-18.28-6.33-25.15 1.235c-6.609 7.26-6.053 18.47 1.24 25.04l9.713 8.756c-8.49 14.18-12.74 30.77-11.64 48.17l-11.86 3.512c-9.428 2.793-14.8 12.66-11.99 22.05c2.781 9.385 12.69 14.71 22.15 11.94l11.34-3.359c8.287 15.49 20.99 27.86 36.38 35.57l-2.839 10.85c-2.482 9.477 3.224 19.16 12.75 21.62c9.566 2.482 19.25-3.221 21.72-12.69l2.82-10.78c5.508 .1875 11.11-.1523 16.75-1.102c11.37-1.893 22.23-5.074 33.1-8.24l3.379 9.455c3.305 9.225 13.5 14.11 22.75 10.76c9.266-3.279 14.1-13.41 10.81-22.65l-3.498-9.792c15.41-6.654 30.08-14.46 43.95-23.57l6.321 8.429c5.891 7.84 17.05 9.443 24.93 3.602c7.885-5.863 9.498-16.97 3.617-24.82l-6.457-8.611c12.66-10.78 24.33-22.54 34.96-35.33l8.816 6.413c7.932 5.795 19.07 4.074 24.89-3.855c5.809-7.908 4.072-18.1-3.874-24.77l-8.885-6.465c8.893-13.88 16.54-28.52 22.99-43.91l10.47 3.59c9.334 3.186 19.43-1.719 22.64-10.99c3.211-9.258-1.739-19.35-11.04-22.53l-10.33-3.541c5.744-20.5 9.424-31.81 8.338-49.26L627.3 227.3zM416 416c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32c17.67 0 32 14.33 32 32C448 401.7 433.7 416 416 416zM272.3 226.4c9-3.959 13.08-14.42 9.115-23.39L277.4 193.9c16.38-4.561 27.93-4.345 46.15-16.94l9.996 9.012c6.969 6.301 18.28 6.326 25.15-1.236c6.609-7.26 6.053-18.47-1.24-25.04l-9.713-8.756c8.49-14.18 12.74-30.77 11.64-48.18l11.86-3.511c9.428-2.793 14.8-12.66 11.99-22.05c-2.781-9.385-12.69-14.71-22.15-11.94l-11.34 3.357C341.5 53.13 328.8 40.76 313.4 33.05l2.838-10.85C318.7 12.73 313 3.04 303.5 .5811c-9.566-2.482-19.25 3.222-21.72 12.69l-2.82 10.78C273.4 23.86 267.8 24.2 262.2 25.15C250.8 27.04 239.1 30.22 229.1 33.39L225.7 23.93C222.4 14.71 212.2 9.827 202.1 13.17C193.7 16.45 188.9 26.59 192.2 35.82l3.498 9.793C180.2 52.27 165.6 60.07 151.7 69.19L145.4 60.76C139.5 52.92 128.3 51.32 120.5 57.16C112.6 63.02 110.1 74.13 116.8 81.98l6.457 8.611C110.6 101.4 98.96 113.1 88.34 125.9L79.52 119.5c-7.932-5.795-19.08-4.074-24.89 3.855c-5.809 7.908-4.07 19 3.875 24.77l8.885 6.465C58.5 168.5 50.86 183.1 44.41 198.5L33.93 194.9c-9.334-3.186-19.44 1.721-22.64 10.99C8.086 215.2 13.04 225.3 22.34 228.4l10.33 3.541C26.93 252.5 23.25 263.8 24.33 281.2L12.75 284.7C3.309 287.4-2.061 297.3 .7441 306.7c3.041 10.21 13.57 14.52 22.14 11.95l11.27-3.33c8.086 15.15 20.68 27.55 36.39 35.43l-2.887 11.06c-1.865 7.156 1.902 22.19 17.26 22.19c7.92 0 15.14-5.287 17.23-13.28l2.863-10.97c7.701 .2773 26.9 .6465 48.76-13.63l8.59 8.809c3.777 3.873 15.44 9.779 25.19 .3691c7.062-6.822 7.225-18.04 .3711-25.07l-9.14-9.373c11.96-18.85 10.27-28.38 15.88-46.61c8.025 3.756 11.44 5.943 16.66 5.943c6.689 0 13.09-3.762 16.13-10.19C231.6 261.1 227.8 250.6 218.9 246.4L210.1 242.3C225 220.2 244.5 208.7 244.9 208.5l3.922 8.856C252.8 226.2 263.3 230.3 272.3 226.4zM128 256C110.3 256 96 241.7 96 223.1c0-17.67 14.33-32 32-32c17.67 0 32 14.33 32 32C160 241.7 145.7 256 128 256zM208 160c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16s16 7.162 16 16C224 152.8 216.8 160 208 160z'/>"},
    )
  }
}