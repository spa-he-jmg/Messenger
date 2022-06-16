import { useEffect, useState } from "react";
import { socket } from './utils/socket';

const Room = () => {

    
    const [messages, setMessages] = useState([]);

    useEffect(() => {
  
      const handler = () => {
        console.log('Im connected with the back-end');
      }
  
      const onMessage = (message) => {
        console.log(message);
        setMessages((messages) => [...messages, message]);
      }
  
      socket.on('connection', handler);
      socket.on('message-received', onMessage);
  
      return () => {
        socket.removeAllListeners();
        socket.disconnect();  
      };
  
    }, []);
  
    const handleClick = () => {
      const roomId = '627bd04fcd411428884ea98c';
  
      socket.connect();
  
      socket.emit('join-room', { roomId });
    };
  
    const handleMessage = () => {
      const message = 'Test message';
      socket.emit('send-message', { message });
      setMessages((messages) => [...messages, message]);
    }
    return ( 
        <div className="chat-route">

        </div>
     );
}
 
export default Room;