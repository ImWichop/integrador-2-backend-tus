'use strict'
const { formatters } = use('Validator')

class StoreLed {
  get formatter () {
    return formatters.JsonApi
  }

  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      feed: 'required',
      value: 'required'
    }
  }
}

module.exports = StoreLed
