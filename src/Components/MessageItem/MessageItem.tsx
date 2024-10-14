import { useState } from 'react';
import * as React from 'react';

interface Props {
  sendMessage: (author: string, message: string) => void;
}


const MessageItem: React.FC<Props> = ({sendMessage}) => {
  const [author, setAuthor] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    sendMessage(author, message);
    setMessage('');
  }

  return (
    <form onSubmit={submitForm}>
      <div>
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="your message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />
      </div>
      <button className="btn btn-primary" type="submit">Send</button>
    </form>
  );
};

export default MessageItem;