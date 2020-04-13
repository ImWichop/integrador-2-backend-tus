'use strict'
const { formatters } = use('Validator')
class StoreDoor {
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

module.exports = StoreDoor
