import React from "react";
import { Timeline } from "antd";

const pad = number => (number >= 10 ? number : '0' + number);

const formatDate = date => {
  const d = new Date(date);

  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(
    d.getMinutes())}`;
}

const MessageList = ({ messages }) => (
  <Timeline>
    {messages.map(m => (
      <Timeline.Item key={m.id}  >
        <em style={{color: '#aaa'}}>[{formatDate(m.date)}] </em><strong >{m.user}</strong>: {m.text}
      </Timeline.Item>
    ))}
    </Timeline>
);

export default MessageList;
