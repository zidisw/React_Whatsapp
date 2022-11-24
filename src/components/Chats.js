import React from "react";
import profil_chat from "../assets/nayeon_profil.jpg";
import chat_background from "../assets/chat_background.jpg";
import { TbApps } from "react-icons/tb";
import { AiOutlineFile } from "react-icons/ai";
import { GrSettingsOption } from "react-icons/gr";
import Message from "../components/Message";

const Chats = () => {
  const messages = [
    {
      name: "Nayeon",
      message: "Bang..",
      css1: "bg-white/80 ",
      css2: "justify-start",
      timestamp: "07:21",
    },
    {
      message: "Iya?",
      css1: "bg-black/90 text-white",
      css2: "justify-end",
      timestamp: "07:21",
    },
    {
      name: "Nayeon",
      message: "Besok shooting gak?",
      css1: "bg-white/80 ",
      css2: "justify-start",
      timestamp: "08:03",
    },
    {
      message: "Iya dong. Di cafe de casa ya. Jam 8~",
      css1: "bg-black/90 text-white",
      css2: "justify-end",
      timestamp: "08:04",
    },
    {
      name: "Nayeon",
      message: "Okay siap",
      css1: "bg-white/80 ",
      css2: "justify-start",
      timestamp: "08:04",
    },
    {
      message: "Oc",
      css1: "bg-black/90 text-white",
      css2: "justify-end",
      timestamp: "08:04",
    },
  ];
  return (
    <div className="chatBody">
      {/* Header */}
      <div className="chatTop">
        <div className="chatProfilePosition">
          <div className="chatProfilePic">
            <img
              src={profil_chat}
              alt=""
              className="chatProfileShape"
            />
          </div>
          <div className="chatProfileAlign">
            <p className="chatName">Nayeon</p>
            <p className="chatLastSeen">Last seen 08:40</p>
          </div>
        </div>

        <div className="text-[23px]">
          <GrSettingsOption />
        </div>
      </div>
      {/* Messages */}
      <div className="chatMessageBodyAlign">
        <div className="chatMessageBodyPosition">
        </div>
        <div className="chatMessagePop">
          <img
            src={chat_background}
            alt=""
            className="chatBackgroundPosition"
          />
        </div>
        <div className="chatMessagePopAlign">
          {messages.map((message) => (
            <Message
              name={message.name}
              message={message.message}
              css1={message.css1}
              css2={message.css2}
              timestamp={message.timestamp}
            />
          ))}
        </div>
      </div>

      {/* Input for message */}
      <div className="chatTyping">
        <div className="input_message">
          <TbApps className="chatTypingIconSize" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          className="chatTypingShape"
        />
        <div className="">
          <AiOutlineFile className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default Chats;
