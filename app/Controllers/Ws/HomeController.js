'use strict'

class HomeController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onLeds (data) {
    this.socket.broadcast('leds', data)
    console.log('leds ' + data)
  }

  onDoor (data) {
    this.socket.broadcast('doors', data)
    console.log('puertas ' + data)
  }

  onWeather (data) {
    this.socket.broadcast('weathers', data)
    console.log('temperatura ' + data)
  }

  onAlarm (data) {
    this.socket.broadcast('alarms', data)
    console.log('alarma ' + data)
  }
}

module.exports = HomeController
