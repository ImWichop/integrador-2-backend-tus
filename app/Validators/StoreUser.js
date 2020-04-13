'use strict'
const { formatters } = use('Validator')
class StoreUser {
  get formatter () {
    return formatters.JsonApi
  }

  get validateAll () {
    return true
  }

  get sanitizationRules () {
    return {
      email: 'normalize_email'
    }
  }

  get rules () {
    return {
      email: 'required|email|max:180|unique:users,email',
      password: 'required|max:100'
    }
  }
}

module.exports = StoreUser
