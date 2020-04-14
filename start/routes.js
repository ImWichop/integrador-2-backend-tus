'use strict'

const Route = use('Route')
Route.post('/login', 'AuthController.login')
Route.resource('users', 'UserController')
  .apiOnly()
  .validator(new Map([
    [['users.store'], ['StoreUser']]
  ]))

Route.group(() => {
  Route.resource('leds', 'LedController')
    .apiOnly()
    .validator(new Map([
      [['leds.store'], ['StoreLed']]
    ]))

  Route.resource('doors', 'DoorController')
    .apiOnly()
    .validator(new Map([
      [['doors.store'], ['StoreDoor']]
    ]))

  Route.resource('weathers', 'WeatherController')
    .apiOnly()
    .validator(new Map([
      [['weathers.store'], ['StoreWeather']]
    ]))

  Route.resource('alarms', 'AlarmController')
    .apiOnly()
    .validator(new Map([
      [['alarms.store'], ['StoreAlarm']]
    ]))
})
  .middleware(['auth'])
