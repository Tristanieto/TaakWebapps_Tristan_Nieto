export class Post {
    private _id: String;
    private _title: string;
    private _inhoud: string;
    private _dateAdded: Date;
    private _addedBy: string;

    constructor(title: string, inhoud: string) {
        this._title = title;
        this._inhoud = inhoud;
        this._dateAdded = new Date();

    }

    static fromJson(json: any): Post {
        const rec = new Post(
            json.title,
            json.inhoud,

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
            dateAdded: this._dateAdded,
            addedBy: this._addedBy
        };
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

}