/*
 * @Description 路由鉴权中间件，实现其他路由守卫功能请新建一个中间件
 *
 * **********************************************************
 * * @Strong 这是一个路由中间件，请不要在 serverMiddleware 中使用 *
 * **********************************************************
 */

// 路由白名单，直接绕过路由守卫

const LOGIN_PATH = '/login'
const WHITE_LIST = [LOGIN_PATH]
// https://nuxtjs.org/docs/internals-glossary/context
export default (content: any) => {
  const { redirect, env, route, store } = content
  if (process.server) {
    return
  }

  const { NO_LOGIN } = env
  const { path, fullPath } = route

  // 开发时可以用 NO_LOGIN 跳过路由鉴权
  if (NO_LOGIN > 0) {
    return
  }

  // 鉴权白名单
  if (WHITE_LIST.includes(path)) {
    return
  }

  const token = store.getters['auth/getToken']
  // 未登录
  if (!token) {
    redirect(`${LOGIN_PATH}?redirect=${encodeURIComponent(fullPath)}`)
  }
  // 已登录但是state因刷新丢失
  /* if (token && !store.state.auth.userId) {
    try {
      auth.refresh(`${LOGIN_PATH}?redirect=${encodeURIComponent(fullPath)}`)
    } catch (e) {
      window.console.error('auth error: ', e)
    }
  } */
}
