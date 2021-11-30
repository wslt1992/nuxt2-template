const TOKEN = 'token'

class Auth {
  set token (token) {
    if (token === null) {
      localStorage.removeItem(TOKEN)
      return
    }
    localStorage.setItem(TOKEN, token)
  }

  get token () {
    return localStorage.getItem(TOKEN)
  }
}

export default new Auth()
