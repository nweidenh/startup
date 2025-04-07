const { WebSocketServer } = requre('ws');

function peerProxy(httpServer) {
    const socketServer = new WebSocketServer({server: httpServer})

    
}