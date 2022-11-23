import React from "react";

const Message = ({ css1, css2, name, message, timestamp }) => {
  return (
    <div className={`${css2} chatDisplay`}>
      <div
        className={`${css1} chatText  `}
      >
        <div className="inChat ">
          {name && <p className="nameChat">{name}</p>}

          <p className="textInChat">{message}</p>
        </div>

        <p className="timeChat">
          {timestamp}
        </p>
      </div>
    </div>
  );
};

export default Message;
