const Handlers = require('./handler')

module.exports = {
  plugin: {
    name: 'chat',
    register: (server, options) => {
      const io = require('socket.io')(server.listener)

      io.on('connection', function (socket) {
        console.log('New connection!')

        socket.on('hello', Handlers.hello)
        socket.on('newMessage', Handlers.newMessage)
        socket.on('goodbye', Handlers.goodbye)
      })
    }
  }
}
