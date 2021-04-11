import { io } from "socket.io-client";
import config from '../config';

const socket = io(config[process.env.NODE_ENV].SOCKET).connect();

socket.on("users", (users) => {
    
    console.log(users);  
    // users.map((user) => {
        //   user.self = user.userID === socket.id;
        // });
        
        // put the current user first, and then sort by username
        // this.users = users.sort((a, b) => {
            //   if (a.self) return -1;
            //   if (b.self) return 1;
            //   if (a.username < b.username) return -1;
            //   return a.username > b.username ? 1 : 0;
            // });
            
        });
        
const subscribeToChat = (appendMsg) => {
    socket.on("get-message", (message)=> {
        console.log(message)
        appendMsg(message);
    })
}

const sendMessage = (message) => {
    socket.emit("send-message", message);
}

const changeRoom = (user) => {
    socket.emit("changeroom", user);
}

const connectSocket = (data) => {
    console.log("Connnected...")
    socket.auth = {...data}
    socket.connect();
}

export {subscribeToChat, sendMessage, connectSocket, changeRoom};