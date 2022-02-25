import React from "react";
import { MessageData } from "../../../models/ChatModels";
import './Message.css';

class MessageState {}

class MessageProps {
    msg_data: MessageData = new MessageData("", "");
}

class Message extends React.Component<MessageProps, MessageState> {
    text: string;
    author: string;
    id: string;

    constructor(props: MessageProps) {
        super(props);
        this.text = props.msg_data.content;
        this.id = props.msg_data.id;
        this.author =  props.msg_data.author;
    }

    render() {
        return (
            <li className="message" key={this.id}>
                <h3 className="author__name" dangerouslySetInnerHTML={{__html: this.author}}></h3>
                <div className="content" dangerouslySetInnerHTML={{__html: this.text}}></div>
            </li>
        );
    }
}

export default Message;