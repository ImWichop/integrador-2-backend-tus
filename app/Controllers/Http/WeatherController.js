'use strict'
const Weather = use('App/Models/Weather')
class WeatherController {
  async index ({ request, response }) {
    const weathers = await Weather.all()

    return response.ok(weathers)
  }

  async store ({ request, response }) {
    const weatherData = request.only([Weather.store])
    const weather = await Weather.create(weatherData)

    return response.created(weather)
  }

  async show ({ request, response, params }) {
    const weather = await Weather.findOrFail(params.id)
    return response.ok(weather)
  }

  async update ({ request, response, params }) {
    const weather = await Weather.findOrFail(params.id)
    const weatherData = request.only(['degrees'])
    weather.merge(weatherData)
    await weather.save()

    return response.ok(weather)
  }
}

module.exports = WeatherController
