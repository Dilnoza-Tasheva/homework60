import { Message } from '../../types';
import * as React from 'react';

interface Props {
  messages: Message[];
}

const MessagesList: React.FC<Props> = ({messages}) => {
  return (
    <div className="container mt-4">
      <ul className="list-group">
        {messages.map(msg => (
          <li key={msg._id} className="list-group-item">
            <strong>{msg.author}</strong>: {msg.message} <br/>
            <span className="text-muted">{new Date(msg.datetime).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesList;