import React from "react";
import '../../styles/ChatArea.css';
import Message from "./message/Message";
import { getMessages, submitMessage } from './ChatRequestManager';
import { MessageData } from "../../models/ChatModels";

class ChatArea extends React.Component {
    state: {text: string, author: string, messages: MessageData[]} = {
        text: "",
        author: "",
        messages: []
    }

    constructor(props: {}) {
        super(props);

        this.handlerChange = this.handlerChange.bind(this);
        this.handlerChangeAuthor = this.handlerChangeAuthor.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.updateMessages = this.updateMessages.bind(this);
    }

    componentDidMount() {
        //TODO fix incorrect rendering
        setInterval(this.updateMessages, 1000);
    }

    updateMessages() {
        this.setState({
            ...this.state,
            messages: getMessages()
        });
    }

    handlerSubmit(ev: React.FormEvent<HTMLInputElement>) {
        submitMessage(new MessageData(this.state.author, this.state.text));
        ev.preventDefault();
    }

    handlerChange(ev: React.ChangeEvent<HTMLInputElement>) {
        let value = ev.target.value;
        this.setState({
            ...this.state,
            text: value
        });
    }

    handlerChangeAuthor(ev: React.ChangeEvent<HTMLInputElement>) {
        let value = ev.target.value;
        this.setState({
            ...this.state,
            author: value
        });
    }

    render() {
        return (
            <div className="chat__area">
                <nav>
                    <ul className="messages__list">
                        {this.state.messages.map((item, idx) => {
                            return <Message msg_data={item} key={item.id}/>
                        })}
                    </ul>
                </nav>
                <form className="input__cont">
                    <input type="text" className="input__message" value={this.state.author} onChange={this.handlerChangeAuthor} />
                    <input type="text" className="input__message" value={this.state.text} onChange={this.handlerChange} />
                    <input type="submit" className="input__button" onClick={this.handlerSubmit} />
                </form>
            </div>
        );
    }
}

export default ChatArea;