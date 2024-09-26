class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} by ${this.author}`;
    }
}


Book.prototype.years = function(){
    return `Years since published: ${new Date().getFullYear() - this.year}`
}

let book1 = new Book('How to hack te system', 'Eric', 2022);
console.log(book1.years());

class Magazine extends Book{
    constructor(title, author, year, issue){
        super(title, author, year);
        this.issue = issue;
    }

    getSummary(){
        return super.getSummary() + ` Issue #:  ${this.issue}`;
    }
}

mag1 = new Magazine("Mad", "Mobin", 2000, 2)
console.log(mag1.getSummary())
console.log(mag1);