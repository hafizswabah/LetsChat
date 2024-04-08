import React from 'react'
import "./Home.css"
function Home() {
    let chat = true;
    let chatClassName = chat ? "chats" : "help-message"
    return (
        <>
            <div className="home-container">
                <div className="chat-bot-heading">
                    <h2>
                        Let's Chat
                    </h2>
                </div>
                <div className="chat-section">
                    <div className={chatClassName}>
                        {chat ?
                        <>
                             <div className='chat-messages-container'>
                                <div className="user-details">
                                    <div className="userProfile">
                                        <img src="/profileImage.avif" alt="" />
                                    </div>
                                    <div className="userName">
                                        <h3>User name</h3>
                                    </div>
                                </div>
                                <div className="userMessage">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id neque dui. Suspendisse potenti.
                                        tellus mollis, eu tristique ipsum pellentesque.

                                    </p>
                                </div>
                            </div>
                             <div className='chat-messages-container'>
                                <div className="user-details">
                                    <div className="userProfile">
                                        <img src="/profileImage.avif" alt="" />
                                    </div>
                                    <div className="userName">
                                        <h3>User name</h3>
                                    </div>
                                </div>
                                <div className="userMessage">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id neque dui. Suspendisse potenti.
                                        tellus mollis, eu tristique ipsum pellentesque.

                                    </p>
                                </div>
                            </div>
                         
                     
                        </>
                       
                            : <h2>How can i help you today ?</h2>
                        }
                    </div>
                </div>
                <div className="chat-box-section">
                    <div className="chat-box">
                        <input type="text" placeholder="message to Let's chat bot" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home