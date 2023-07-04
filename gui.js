class GUI { //Graphical User Interface 


    constructor() {
        this.library = new Library();
        this.storage = new Storage();

        const data = this.storage.loadData;
        if (data){
        this.library.fromDbObjects(data)
        }
    }



    start() {
        while (true) {
            const firstChoice = prompt('Hai 4 opzioni: \n' +
                '\n' +
                '1)Guarda la lista dei libri \n' +
                '2)Aggiungi un libro \n' +
                '3)Rimuovi un libro \n' +
                '4)Esci dal programma \n' +
                'Inserisci il numero dell\'operazione'
            )

            if (firstChoice === '1') {
                this.showBooks()
            } else if (firstChoice === '2') {
                this.insertBook()
            } else if (firstChoice === '3') {
                this.deleteBook()
            } else if (firstChoice === '4') {
                break;
            } else {
                alert('hai sbagliato ad inserire l\'opzione')
            }
        }
    }


    insertBook() {

        const title = prompt('Inserisci il titolo');
        const author = prompt('Inserisci l\'autore');
        const dop = prompt('Inserisci la data di pubblicazione');
        const publisher = prompt('Inserisci la casa editrice')

        const book = new Book(title, author, dop, publisher);

        this.library.addPublication(book);

        this.storage.saveData(this.library.publications);

    }

    showBooks() {
        const allBooks = this.library.getAllBookCards();
        console.log(allBooks)

    }

}