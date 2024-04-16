export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth.ts 执行中间件~");
  const isLogin = false;
  if (to.path != "/login" && isLogin) {
    return navigateTo("/login");
  }
});
