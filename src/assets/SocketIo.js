import SocketIO from 'socket.io-client'

export function getSocket() {
  var socket = SocketIO.connect('http://127.0.0.1:5000/jmeterlog')
  return socket
}
