import React, { useEffect, useRef, useState } from 'react'
import "./Home.css"
function Home() {
    let [chat, setChat] = useState("")
    let [chatHistory, setChatHistory] = useState([])
    const chatContainerRef = useRef()

    function handleChat() {
        if (!chat.trim() == "") {
            setChatHistory(prevchats => [...prevchats, chat.trim()])
            setChat = ""
        }
    }

    let chatClassName = chatHistory.length === 0 ? "help-message" : "chats"
    useEffect(() => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }, [chatHistory])

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
                                {chatHistory.map((item) => {
                                    return (
                                        <div className='chat-messages-container' >
                                            <div className="user-details">
                                                <div className="userProfile">
                                                    <img src="/profileImage.avif" alt="" />
                                                </div>
                                                <div className="userName">
                                                    <h5>User name</h5>
                                                </div>
                                            </div>
                                            <div className="userMessage">
                                                <p>
                                                    {item}
                                                </p>
                                            </div>
                                        </div>)
                                })}




                            </>

                            : <h2>How can i help you today ?</h2>
                        }
                    </div>
                </div>
                <div className="chat-box-section">
                    <div className="chat-box">
                        <input type="text" placeholder="message to Let's chat bot" onChange={(e) => setChat(e.target.value)} />
                        <button className='chatSendBtn' onClick={handleChat}>send</button>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Home