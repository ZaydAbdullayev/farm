import React, { useEffect, useRef, useState, memo } from 'react';
import socket from '../../socket.config';
import { avatars } from './avatar';
import messageIcon from '../assets/picmix.com_316194.png';

type Message = {
    sender: string;
    text: string;
    avatar_id: number;
    timestamp: number;
};

const Message = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState(0);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSendMessage = () => {
        if (message.trim() === '') return;
        socket.emit('send-message', message);
        socket.on('error', (message) => {
            alert(message);
        });
        setMessage('');
    };

    useEffect(() => {
        socket.on('receive-message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
        socket.on('user-count', (message) => {
            setUsers(message);
        });
        return () => {
            socket.off('receive-message');
            socket.off('user-count');
        };
    }, []); 

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className={`chat-container ${open ? 'active' : ''}`}>
            <img src={messageIcon} alt="Chat" onClick={() => setOpen(!open)} />
            <div className="chat-box df fdc aic gap-10">
                <h2>Chat <small>users: {users}</small></h2>
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div key={index} className='df aic gap-10'>
                            <img src={avatars[msg.avatar_id].src} alt="avatar" />
                            <p className='df fdc'>
                                <span>{msg.sender}:</span>
                                {msg.text}
                            </p>
                        </div>
                    ))}
                    <div ref={messagesEndRef}></div>
                </div>
                <label className="send-message w100 df aic gap-5">
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='message' />
                    <button onClick={handleSendMessage}>Send</button>
                </label>
            </div>
        </div>
    );
}

export default memo(Message);
