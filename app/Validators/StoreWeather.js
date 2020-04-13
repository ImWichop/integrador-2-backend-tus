'use strict'
const { formatters } = use('Validator')

class StoreWeather {
  get formatter () {
    return formatters.JsonApi
  }

  get validateAll () {
    return true
  }

  get rules () {
    return {
      degrees: 'required'
    }
  }
}

module.exports = StoreWeather
