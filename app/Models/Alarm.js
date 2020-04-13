'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Alarm extends Model {
  static get store () {
    return ['name', 'feed', 'value']
  }

  static get update () {
    return ['value']
  }
}

module.exports = Alarm
