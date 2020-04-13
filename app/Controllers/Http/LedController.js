'use strict'
const Led = use('App/Models/Led')
const AllLed = use('App/Models/AllLed')
class LedController {
  async index ({ request, response }) {
    const leds = await Led.all()

    return response.ok(leds)
  }

  async store ({ request, response }) {
    const ledData = request.only(Led.store)
    const led = await Led.create(ledData)

    return response.created(led)
  }

  async show ({ response, params }) {
    const led = await Led.findOrFail(params.id)
    return response.ok(led)
  }

  async update ({ request, response, params }) {
    const led = await Led.findOrFail(params.id)
    const ledData = request.only(Led.update)
    led.merge(ledData)
    await led.save()

    await AllLed.create({
      name: led.name,
      feed: led.feed,
      value: led.value
    })

    return response.ok(led)
  }
}

module.exports = LedController
