import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as Arrow } from "../../../../assets/icons/arrow-right.svg";
import "./chatBox.scss";

const TYPE_LABEL = {
  ADMIN: "admin",
  PLAYER: "player",
  OOC: "ooc",
  ME: "me",
};

const ChatBox = () => {
  const listRef = useRef(null);
  const [msgs, setMsgs] = useState([
    { label: TYPE_LABEL.ADMIN, msg: "no, we dont love new admins" },
    { label: TYPE_LABEL.PLAYER, msg: "no, we dont love new admins" },
    { label: TYPE_LABEL.OOC, msg: "no, we dont love new admins" },
    { label: TYPE_LABEL.ME, msg: "no, we dont love new admins" },
  ]);
  const [msgTxt, setMsgTxt] = useState("");

  useEffect(() => onScrollToBottom(), []);

  const onScrollToBottom = () => {
    setTimeout(() => {
      listRef.current.scrollTo(0, listRef.current.scrollHeight);
    });
  };

  const onPushMsg = () => {
    if (!msgTxt) return;
    setMsgs((ls) => [...ls, { msg: msgTxt, label: TYPE_LABEL.ME }]);
    setMsgTxt("");
    onScrollToBottom();
  };

  return (
    <div className="chat-box-container">
      <div className="msg-list" ref={listRef}>
        {msgs.map((msg, index) => (
          <div className="item-msg" key={index}>
            {msg.label !== TYPE_LABEL.ME && (
              <div className={`label ${msg.label}`}>{msg.label}</div>
            )}
            <div className="msg">{msg.msg}</div>
          </div>
        ))}
      </div>
      <div className="input-msg-container">
        <input
          type="text"
          placeholder="Type Message"
          value={msgTxt}
          onChange={(e) => setMsgTxt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onPushMsg();
          }}
        />
        <button onClick={() => onPushMsg()}>
          <Arrow />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
