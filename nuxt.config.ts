// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // 配置属性采用驼峰的形式
    // server 端可访问的配置，会被打包到 server_bundle.js 中
    appKey: "aabbcc",

    // server、client 端，可访问的配置。会被打包到 server_bundle.js 和 client_bundle.js 中。
    public: {
      baseURL: "http://codercba.com",
    },
  },
  // appConfig: {
  //   title: "Hello Nuxt3",
  //   theme: {
  //     primary: "yellow",
  //   },
  // },
  app: {
    head: {
      title: "XG",
      charset: "UTF-8",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
      meta: [
        {
          name: "keywords",
          content: "XG SEO",
        },
        {
          name: "description",
          content: "手机商城 XG",
        },
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "favicon.ico",
          type: "image/x-icon",
        },
      ],
      style: [
        // {
        //   children: "body { color: red; }",
        // },
      ],
      script: [
        {
          src: "http://codercba.com",
        },
      ],
    },
  },
  // ssr: false,
  // router: {
  //   options: {
  //     hashMode: true,
  //   },
  // },
  css: [
    "@/assets/styles/main.css",
    "@/assets/styles/main.less",
    "@/assets/styles/variable.less",
    "@/assets/iconfont/iconfont.css",
  ],
  vite: {
    css: {
      // 自动导入scss模块额外变量
      // preprocessorOptions: {
      //   scss: {
      //     additionalData: '@use "@/assets/_colors.scss" as *;',
      //   },
      //   sass: {
      //     additionalData: '@use "@/assets/_colors.sass" as *\n'
      //   }
      // },
    },
    // plugins: [ElementPlus()]
  },
  routeRules: {
    "/": { ssr: true },
    category: { ssr: false }, // spa 应用
    // 混合渲染，实验性特性
    "/cart": { static: true }, // 只会在构建时，生成一次静态页面。
    // '/profile': { swr: true } // 会生成多次静态页面，自动验证页面需要重新生成时，生成页面。
    "/profile": { swr: 60 * 10 }, // 10 分钟后检测。
  },
  modules: ["@pinia/nuxt", "@element-plus/nuxt"],
  elementPlus: { themes: ["dark"] },
  devtools: { enabled: true },
});
