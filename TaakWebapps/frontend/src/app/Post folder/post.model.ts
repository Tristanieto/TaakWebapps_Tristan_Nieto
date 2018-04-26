export class Post{
    private _id: String;
    private _title: string;
    private _inhoud: string;
    private _dateAdded : Date;

    constructor(title : string, inhoud? : string){
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
        return rec;
    }

    toJSON(){
        return {
            title: this._title,
            inhoud: this._inhoud,
            dateAdded: this._dateAdded
        }
    }

    get title(): string{
        return this._title
    }

    get inhoud(): string{
        return this._inhoud;
    }

    get dateAdded(): Date{
        return this._dateAdded;
    }



    
}