import { Comment } from './comment/comment.model';

export class Post {
    private _id: string;
    private _title: string;
    private _inhoud: string;
    private _comments: Comment[];
    private _dateAdded: Date;
    private _addedBy: string;

    constructor(title: string, inhoud: string, comments: Comment[] = []) {
        this._title = title;
        this._inhoud = inhoud;
        this._dateAdded = new Date();
        this._comments = comments;
    }

    static fromJson(json: any): Post {
        const rec = new Post(
            json.title,
            json.inhoud,
            json.comments.map(Comment.fromJSON)
        );
        rec._id = json._id;
        rec._addedBy = json.addedBy;
        return rec;
    }

    toJSON() {
        return {
            _id: this._id,
            title: this._title,
            inhoud: this._inhoud,
            comments: this._comments.map(com => com.ToJSON()),
            dateAdded: this._dateAdded,
            addedBy: this._addedBy
        };
    }

    get id(): string{
        return this._id;
    }

    get title(): string {
        return this._title
    }

    get inhoud(): string {
        return this._inhoud;
    }

    get dateAdded(): Date {
        return this._dateAdded;
    }

    get addedBy(): string{
        return this._addedBy;
    }

    get comments(): Comment[]{
        return this._comments; 
    }

    get aantalComments(): Number{
        return this._comments.length;
    }

    addComment(com: Comment){
        this._comments.push(com);
    }

}