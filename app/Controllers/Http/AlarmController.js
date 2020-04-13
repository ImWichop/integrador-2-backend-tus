'use strict'
const Alarm = use('App/Models/Alarm')
const AllAlarm = use('App/Models/AllAlarm')
class AlarmController {
  async index ({ request, response }) {
    const alarms = await Alarm.all()

    return response.ok(alarms)
  }

  async store ({ request, response }) {
    const alarmData = request.only(Alarm.store)
    const alarm = await Alarm.create(alarmData)

    return response.created(alarm)
  }

  async show ({ response, params }) {
    const alarm = await Alarm.findOrFail(params.id)
    return response.ok(alarm)
  }

  async update ({ request, response, params }) {
    const alarm = await Alarm.findOrFail(params.id)
    const alarmData = request.only(Alarm.update)
    await alarm.merge(alarmData)
    await alarm.save()

    await AllAlarm.create({
      name: alarm.name,
      feed: alarm.feed,
      value: alarm.value
    })

    return response.ok(alarm)
  }
}

module.exports = AlarmController
