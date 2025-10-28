import {WebSocketServer} from "ws";
import {client} from "@repo/db/client"

const server = new WebSocketServer({
    port: 3002
});

server.on("connection", async (socket)=> {


    await client.user.create({
        data: {
            username: Math.random().toString(),  //0.00002320
            password: Math.random().toString()
        }
    })

})