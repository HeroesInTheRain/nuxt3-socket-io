import startIoServer from "./io"

export default defineNuxtConfig({
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],

  devtools: { enabled: true },

  hooks: {
    listen: (server) => startIoServer(server)
  }
})
