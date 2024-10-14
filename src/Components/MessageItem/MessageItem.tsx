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
    <div className="container mt-4">
      <h5>Send a message</h5>
      <form onSubmit={submitForm} className="form-inline">
        <div className="form-group mt-2">
          <input
            className="form-control"
            type="text"
            placeholder="Your name"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
          />
        </div>
        <div className="form-group mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="your message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
        </div>
        <button className="btn btn-success mt-2 mb-4" type="submit">Send</button>
      </form>
    </div>

  );
};

export default MessageItem;