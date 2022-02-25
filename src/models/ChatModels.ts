export class MessageData {
    author: string;
    id: string;
    content: string;

    constructor(author: string, content: string) {
        this.author = author;
        this.id = this.id = Math.round(Math.random() * 1000).toString();
        this.content = content;
    }
}