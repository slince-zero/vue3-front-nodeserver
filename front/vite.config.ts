import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"


/**
 * 实际上，http://127.0.0.1:3000/ 和 http://localhost:3000/ 在大多数情况下是等价的。
 * 127.0.0.1是本机的IPv4地址，而localhost是一个域名，它在本机被解析为127.0.0.1。然而，
 * 从技术上讲，localhost可能会通过IPv6解析为::1，这可能会导致一些差异。
 * 
 * 如果你使用了代理服务器或VPN，可能会导致localhost名称的解析被代理或改变，而直接使用127.0.0.1则不受这些工具的影响。
 */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000/",
        // target: "http://localhost:3000/", // 有问题
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})

