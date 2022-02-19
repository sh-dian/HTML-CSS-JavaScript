class Book {
    constructor(author){
        this.author = author;
    }

    //getter
    get writer(){
        return this.author;
    }

    //setter
    set writer(updatedAuthor){
        this.author = updatedAuthor;
    }
}