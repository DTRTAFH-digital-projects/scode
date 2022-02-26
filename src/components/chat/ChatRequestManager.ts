import { MessageData } from "../../models/ChatModels";

export const submitMessage = (messageData: MessageData) => {
    const url = "http://localhost:8000/api/newmessage";
    const data = {
        name: messageData.author,
        text: messageData.content
    };

    fetch(url, {
        method: "POST",
        headers: [
            ["Content-Type", "application/json"]
        ],
        body: JSON.stringify(data)
        })
        .catch(error => { console.log(error) }
    );
}

export function getMessages(): MessageData[] {
    const url = "http://localhost:8000/api/messages";
    let result: MessageData[] = [];
    fetch(url)
        .then(res => res.json())
        .then(res => {
            res.messages.map(( message: { name: string; text: string } ) => {
                result.push(new MessageData(message.name, message.text));
                return undefined;
            });
        })
        .catch(error => { console.log(error) }
    );
    return result;
}