import React, { Component } from 'react';

class JohnChatInput extends Component {
    state = {
        messageStatus:"",
        username:""
    }

    isDisabled = () => {
        return this.state.messageStatus === '';
      };
    
    handleMessageStatus = event => {
        this.setState({ messageStatus: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
      //  this.setState({username: this.props.currentChat[1].username});
        this.props.addMessage(this.props.currentChat[1].username, this.state.messageStatus);
    }
    
    render(){
        return(
<div>
                    <form 
                        className="input-group" onSubmit={this.handleSubmit}
                        >
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter your message..."
                            value={this.state.value}
                            onChange={this.handleMessageStatus}  
                        />
                        <div className="input-group-append">
                            <button 
                                className="btn submit-button" 
                                disabled={this.isDisabled()}
                            >
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
        )
    }
}

export default JohnChatInput;