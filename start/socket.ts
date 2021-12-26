import Ws from 'App/Services/Ws'
Ws.boot()

Ws.io.sockets.on('connection', function (client) {
  client.on('change_room', function (data) {
    Ws.io.emit(data.room, { event: 'change_room', email: data.email, room_url: data.room_url })
  })

  client.on('subscribe', function (room) {
    const users: string[] = []
    client.join(room)

    const clients = Ws.io.sockets.adapter.rooms.get(room)
    for (const clientId of clients!) {
      const clientSocket = Ws.io.sockets.sockets.get(clientId)
      users.push(clientSocket!.handshake.auth.user.email)
    }

    Ws.io.to(room).emit(room, {
      event: 'users',
      users: users.filter((user, index) => users.indexOf(user) === index),
    })
  })

  client.on('disconnecting', function () {
    const users: string[] = []

    client.rooms.forEach(function (room) {
      const clients = Ws.io.sockets.adapter.rooms.get(room)

      for (const clientId of clients!) {
        const clientSocket = Ws.io.sockets.sockets.get(clientId)
        users.push(clientSocket!.handshake.auth.user.email)
      }

      Ws.io.to(room).emit(room, {
        event: 'users',
        users: users.filter((user) => user !== client.handshake.auth.user.email),
      })
    })
  })
})
