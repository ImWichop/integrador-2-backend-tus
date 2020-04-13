'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Weather extends Model {
  static get store () {
    return ['degrees']
  }
}

module.exports = Weather
