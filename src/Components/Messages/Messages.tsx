import { Message } from '../../types';
import * as React from 'react';

interface Props {
  messages: Message[];
}

const MessagesList: React.FC<Props> = ({messages}) => {
  return (
    <div className="container mt-4">
      <ul className="list-group">
        {messages.length > 0 ? (
          messages.map(msg => (
            <li key={msg._id} className="list-group-item">
              <strong>{msg.author}</strong>: {msg.message} <br/>
              <span className="text-muted">{new Date(msg.datetime).toLocaleString()}</span>
            </li>
          ))
          ) : (
            <li className="list-group-item">No messages</li>
        )}
      </ul>
    </div>
  );
};

export default MessagesList;