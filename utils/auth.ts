const TOKEN = 'token'

class Auth {
  set token (token) {
    if (typeof token === 'string') {
      localStorage.setItem(TOKEN, token)
    }
  }

  get token () {
    return localStorage.getItem(TOKEN)
  }
}

export default new Auth()
