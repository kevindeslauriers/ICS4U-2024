function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary =  function(){
    return `${this.title} by ${this.author}`;
}

let book1 = new Book('How to hack te system', 'Eric', 2024);

console.log(book1);