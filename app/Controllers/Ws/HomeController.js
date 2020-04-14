'use strict'

class HomeController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onLeds (data) {
    this.socket.broadcast('leds', data)
    console.log(data)
  }

  onDoor (data) {
    this.socket.broadcast('doors', data)
    console.log(data)
  }

  onWeather (data) {
    this.socket.broadcast('weathers', data)
    console.log(data)
  }

  onAlarm (data) {
    this.socket.broadcast('alarms', data)
    console.log(data)
  }
}

module.exports = HomeController
