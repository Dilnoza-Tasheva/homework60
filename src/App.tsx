import './App.css'
import MessagesList from './Components/Messages/Messages.tsx';
import MessageItem from './Components/MessageItem/MessageItem.tsx';
import { useEffect, useState } from 'react';
import { Message } from './types';

const App = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  const getMessages = async () => {
    try {
      const response = await fetch('http://146.185.154.90:8000/messages');
      if (!response.ok) {
        throw new Error ('Error receiving the message');
      }
      const data: Message[] = await response.json();
      setMessages(data);
    } catch (error) {
      console.log('Error receiving the message', error);
    }
  };

  const sendMessage = async (author: string, message: string) => {
    const url = 'http://146.185.154.90:8000/messages';
    const data = new URLSearchParams();
    data.set('message', message);
    data.set('author', author);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Error sending the message')
      }

      console.log('Message sent')
    } catch (error) {
      console.log('Error:', error)
    }
  };


  useEffect(() => {

    const interval = setInterval(() => {
      getMessages();
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="container mb-5 mt-5">
      <h5>Chat box: </h5>
      <MessagesList messages={messages}/>
      <MessageItem sendMessage={sendMessage}/>
    </div>
  )
};

export default App
