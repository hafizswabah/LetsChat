import React, { useEffect, useRef, useState } from 'react';
import "./Home.css";
import axios from "axios"

function Home() {
    const [chat, setChat] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    let [response,setResponse]=useState("")
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState(["Come Let's Chat", "What's up?"]);
    const chatContainerRef = useRef();
    let chatClassName = chatHistory.length === 0 ? "help-message" : "chats"

    async function handleChat() {
        if (chat.trim() !== "") {
            const res = await axios.post("/chat", { chat, greet: true });
            setChatHistory(prevchats => [...prevchats, { user: chat.trim(), bot: res.data.responseMessage }]);
            setChat("");
        }
    }
    console.log(chatHistory);

    function handleSuggestionClick(suggestion) {
        setChat(suggestion);
        setShowSuggestions(false);
    }

    function handleInputClick() {
        setShowSuggestions(true);
    }

    useEffect(() => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [chatHistory]);

    return (
        <>
            <div className="home-container">
                <div className="chat-bot-heading">
                    <h2>
                        Let's Chat
                    </h2>
                </div>
                <div className="chat-section">
                    <div className={chatClassName} ref={chatContainerRef}>
                        {chatHistory.length > 0 ?
                            <>
                                {chatHistory.map((item, index) => (
                                    <div className="chat-messages-container" key={index}>
                                        <div className="user-details">
                                            <div className="userProfile">
                                                <img src="/profileImage.avif" alt="" />
                                            </div>
                                            <div className="userName">
                                                <h5>User name</h5>
                                            </div>
                                        </div>
                                        <div className="userMessage">
                                            <p>{item.user}</p>
                                        </div>
                                        <div className="user-details">
                                            <div className="userProfile">
                                                <img src="/bot.jpeg" alt="" />
                                            </div>
                                            <div className="userName">
                                                <h5>Lets chat</h5>
                                            </div>
                                        </div>
                                        <div className="userMessage">
                                            <p>{item.bot}</p>
                                        </div>
                                    </div>
                                ))}
                            </>
                            : <h2>How can I help you today?</h2>
                        }
                    </div>
                </div>
                <div className="chat-box-section">
                    <div className="chat-box">
                        <input
                            type="text"
                            placeholder="message to Let's chat bot"
                            value={chat}
                            onChange={(e) => setChat(e.target.value)}
                            onClick={handleInputClick}
                        />
                        <button className='chatSendBtn' onClick={handleChat}>send</button>
                    </div>
                    {showSuggestions && (
                        <div className="suggestions">
                            {suggestions.map((suggestion, index) => (
                                <div className="suggestion" key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                    {suggestion}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;
