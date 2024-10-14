import { Message } from '../../types';
import * as React from 'react';

interface Props {
  messages: Message[];
}

const MessagesList: React.FC<Props> = ({messages}) => {
  return (
    <div>
      <ul>
        {messages.map(msg => (
          <li key={msg.id}>
            <strong>{msg.author}</strong>: {msg.message}</li>
        ))}

      </ul>
    </div>
  );
};

export default MessagesList;