import auth from '~/utils/auth'

class Auth {
  token!: string | null
}

export const state: () => Auth = () => (new Auth())
export const getters = {
  getToken: (state: Auth) => {
    /* 刷新后,重新加载token */
    if (!state.token) {
      state.token = auth.token
    }
    return state.token
  }
}
export const mutations = {
  setToken (state: Auth, token: string) {
    state.token = token
    auth.token = token
  }

}
