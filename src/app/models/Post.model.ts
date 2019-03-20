export class Post {

    loveIts: number;
    publishedOn: string;

    constructor(public title: string, public content: string) {
        this.loveIts = 0;
        this.publishedOn = new Date().toString();
    }
}