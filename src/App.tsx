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
      console.log('Error receiving the message');
    }
  };


  useEffect(() => {

    const interval = setInterval(() => {
      getMessages();
    }, 3000);

    return () => clearInterval(interval);
  }, []);




  return (
    <>
      <MessagesList messages={messages}/>
      <MessageItem/>
    </>
  )
};

export default App
