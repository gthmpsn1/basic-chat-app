import React, { Component } from 'react';

class JohnChatWindow extends Component {
   

    render() {
        const username = this.props.currentChat[1].username;
        return(
            <div>
                <h2>Super Awesome Chat</h2>
                <div className="name sender">
                    {username}
                </div>
                <ul className="message-list">
                    {this.props.currentMessages.map(
                        (message, index) => 
                            (<li key={index} className={message.username === username ? 'message sender' : 'message recipient'}>
                            <p>{`${message.username}: ${message.text}`}</p>
                        </li>)
                    )}
                </ul>
            </div>
        );
    }
}

export default JohnChatWindow;