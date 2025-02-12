import React, { useEffect, useRef, useState } from 'react';
import socket from '../../socket.config';
import chat_icon from '../assets/chat.gif';

const fakeMessages = [
    { sender: 'Server', text: 'Hello!' },
    { sender: 'Server', text: 'How are you?' },
    { sender: 'Server', text: 'I am fine!' },
];

export default function Message() {
    const [messages, setMessages] = useState<{ sender: string, text: string }[]>(fakeMessages);
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSendMessage = () => {
        if (message.trim() === '') return;
        socket.emit('sendMessage', message);
        setMessages((prevMessages) => [...prevMessages, { sender: 'Me', text: message }]);
        setMessage('');
    };

    useEffect(() => {
        socket.on('receiveMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, { sender: 'Server', text: message }]);
        });

        return () => {
            socket.off('receiveMessage');
        };
    }, []);
    
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className={`chat-container ${open ? 'active' : ''}`}>
            <img src={chat_icon} alt="Chat" onClick={() => setOpen(!open)} />
            <div className="chat-box df fdc aic gap-10">
                <h2>Chat</h2>
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div key={index} className='df aic gap-10'>
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
