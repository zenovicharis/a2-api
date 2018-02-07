export class Book {
    public Id:string;    
    public Title:string;
    public CoverUrl:string;

    constructor(id:string, title:string, cover:string){
        this.Id = id;
        this.Title = title;
        this.CoverUrl = cover;
    }
}
