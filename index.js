module.exports = expose

function expose () {
  return function (state, bus) {
    window.choo = {}
    window.choo.state = state
    window.choo.emit = function (eventName, data) {
      bus.emit(eventName, data)
    }

    window.choo.on = function (eventName, listener) {
      bus.on(eventName, listener)
    }
  }
}
