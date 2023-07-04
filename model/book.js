class Book extends Publication{

    constructor(title, author, dop, publisher){
        super(title, dop, publisher)
        this.author = author;
    }

    toString(){ // le funzioni nelle classi si chiamano metodi e non va messo "function" davanti 
       const card = super.toString() + 
                    'Autore: ' + this.author + '\n';
        return card;
    }

    getUpperAuthor(){
        const upperAuthor = this.author.toUpperCase();
        return upperAuthor;
    }

    getUpperTitle(){
        const upperTitle = this.title.toUpperCase();
        return upperTitle;
    }
}

