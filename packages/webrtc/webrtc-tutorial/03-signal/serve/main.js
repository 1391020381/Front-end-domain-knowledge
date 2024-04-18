import { SOCKET_EMIT,SOCKET_ON_SYS } from './enum'
import SocketRtc from './on.js';
import initApp from './config.js'
import Clients from './clients.js'
import logger from './logger.js';

let io = initApp();

let clients = new Clients();

io.on(SOCKET_EMIT.MESSAGE,socket=>{
    const { query }  = socket.handshake;
    const {username,room}  = query

    const nowUser = {userId:socket.id,username}
    clients.add(nowUser)
    socket.join(room)
    io.to(room).emit(SOCKET_EMIT.SYS_USER_LIST,clients.data)
    SocketRtc(socket,clients)

    socket.on(SOCKET_ON_SYS.DISCONNECT,()=>{
        logger.debug(`断开连接:${username}`)
        clients.remove(nowUser.username)
        io.to(room).emit(SOCKET_EMIT.SYS_USER_LIST,clients.data)
    })
})