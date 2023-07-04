class Publication{

    constructor (title, dop, publisher){
        this.title = title;

        const dopArray = dop.split('/');
        const year = parseInt(dopArray[2]);
        const month = parseInt(dopArray[1]) -1;
        const day = parseInt(dopArray[0]);

        this.dop = new Date(year, month, day);
        this.publisher = publisher;
    }

    toString(){ // le funzioni nelle classi si chiamano metodi e non va messo "function" davanti 
        const card = 'Titolo: ' + this.title + '\n' + 
                     'Data di pubblicazione: ' + this.dop + '\n' +
                     'Casa Editrice: ' + this.publisher + '\n';
        return card;
    }

    getUpperTitle(){
        const upperTitle = this.title.toUpperCase();
        return upperTitle;
    }
}