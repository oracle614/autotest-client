import SocketIO from 'socket.io-client'

var socket = null

export function getSocket() {
  if (socket == null) {
    socket = SocketIO.connect('http://127.0.0.1:5000/jmeter')
  }
  return socket
}
