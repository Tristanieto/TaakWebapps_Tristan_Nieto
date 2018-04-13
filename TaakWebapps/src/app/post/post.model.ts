export class Post{

    private _title: string;
    private _inhoud: string;
    private _dateAdded : Date;

    constructor(title : string, inhoud : string){
        this._title = title;
        this._inhoud = inhoud;
        this._dateAdded = new Date();
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