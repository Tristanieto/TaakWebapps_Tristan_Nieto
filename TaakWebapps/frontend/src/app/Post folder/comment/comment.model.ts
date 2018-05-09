export class Comment {
    private _id: string;
    private _inhoud: string;
    private _addedBy: string;


    static fromJSON(json): Comment {
        const rec = new Comment(json._inhoud);
        rec._id = json._id;
        rec._addedBy = json.addedBy
        return rec;
    }

    constructor(inhoud: string) {
        this._inhoud = inhoud;
    }

    get id(): string {
        return this._id
    }

    get inhoud(): string {
        return this._inhoud
    }

    set inhoud(inhoud: string) {
        this._inhoud = inhoud;
    }

    set addedBy(user : string){
        this._addedBy = user;
    }

    get addedBy(): string{
        return this._addedBy
    }

    ToJSON() {
        return {
            _id: this._id,
            _inhoud: this._inhoud,
            _addedBy: this._addedBy
        }
    }

}