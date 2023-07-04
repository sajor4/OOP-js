class Magazine extends Publication{

    constructor(title, dop, publisher, issue) {
        super(title, dop, publisher)
        this.title = title;
        this.dop = dop;
        this.publisher = publisher;
        this.issue = issue;

    }
    toString(){ // le funzioni nelle classi si chiamano metodi e non va messo "function" davanti 
        const card = super.toString() + 'Numero uscita: ' + this.issue;
        return card;
    }

}