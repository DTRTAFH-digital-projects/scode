import React from "react";
import '../../styles/ChatArea.css';
import Message from "./message/Message";
import { getMessages, submitMessage } from './ChatRequestManager';
import { MessageData } from "../../models/ChatModels";
import Cookies from "js-cookie";

class ChatArea extends React.Component {
    author: { name?: string, id?: string }
    state: {text: string, messages: MessageData[]} = {
        text: "",
        messages: []
    }

    constructor(props: {}) {
        super(props);

        this.author = {
            id: Cookies.get("id"),
            name: Cookies.get("nickname") //TODO get nickname from db.
        }

        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.updateMessages = this.updateMessages.bind(this);
    }

    componentDidMount() {
        //TODO fix incorrect rendering
        //setInterval(this.updateMessages, 1000);
    }

    updateMessages() {
        this.setState({
            ...this.state,
            messages: getMessages()
        });
    }

    handlerSubmit(ev: React.FormEvent<HTMLInputElement>) {
        submitMessage(new MessageData(this.author.id === undefined ? "" : this.author.id, this.state.text));
        ev.preventDefault();
    }

    handlerChange(ev: React.ChangeEvent<HTMLInputElement>) {
        let value = ev.target.value;
        this.setState({
            ...this.state,
            text: value
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
                    <input type="text" className="input__message" value={this.state.text} onChange={this.handlerChange} />
                    <input type="submit" className="input__button" onClick={this.handlerSubmit} />
                </form>
            </div>
        );
    }
}

export default ChatArea;