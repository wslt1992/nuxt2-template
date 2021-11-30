import auth from '~/utils/auth'

class Auth {
  token: string | null = null
}

export const state: () => Auth = () => (new Auth())
export const getters = {
  getToken: (state: Auth) => {
    return state.token
  }
}
export const mutations = {
  setToken (state: Auth, token: string) {
    state.token = token
    auth.token = token
  },
  clearToken (state: Auth) {
    state.token = null
    auth.token = null
  }

}
