import React, {useEffect, useState} from 'react';
import Chat, {Bubble, useMessages} from "@chatui/core";
import { sendMessage, subscribeToChat } from "../service/socket";
import "@chatui/core/dist/index.css";

export default function MainChatWindow(props) {
    console.log(props)
    const {messages, appendMsg} = useMessages([]);

    useEffect(()=>{
      subscribeToChat(appendMsg);
    },[]);

    function handleSend(type, val) {
        if (type === "text" && val.trim()) {
          sendMessage({
            type: "text",
            content: {text: val},
            trackId: props.trackId,
            username: props.display_name
          });
          
          appendMsg({
            type: "text",
            content: {text: val, username: props.display_name},
            position: "right"
          });
        }
    }

    function renderMessageContent(msg) {
        const {content} = msg;
        if(content.username === props.display_name){
          content.username = "me";
        }

        return (
          <Bubble type="text">
            <span style={{ color: "purple" }}>
              {content.username}
            </span>
            <p>
              {content.text}
            </p>
          </Bubble>
          )
    }

    return (
      <div style={{height:"100vh"}}>
        <Chat
            locale='en-US'
            placeholder="Enter Text"
            navbar={{title: props.title, leftContent: { onClick: "helllo"}}}
            messages={messages}
            renderMessageContent={renderMessageContent}
            onSend={handleSend}    
        />
      </div>
    );
}
