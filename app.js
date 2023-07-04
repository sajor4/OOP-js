// PROGRAMMAZIONE ORIENTATA AD OGGETTI

const book1 = {
    title: 'iliade',
    authors: 'omero',
    dop: '27/12/2009',
    publisher: 'einaudi',
}

const book2 = new Book('odissea', 'omero', '27/12/2010', 'einaudi')

console.log(book1)
console.log(book2)

// function getBookCard(book){
//     const card = 'Titolo: ' + book.title + '\n' + 
//                  'Autore: ' + book.authors + '\n' +
//                  'Data di pubblicazione: ' + book.dop + '\n' +
//                  'Casa Editrice: ' + book.publisher + '\n';
//     return card;
// }

// console.log(getBookCard(book1));
console.log(book2.toString());

const book3 = new Book('la divina commedia', 'dante', '22/08/1998', 'mondadori')

console.log(book3 + '') // se la funzione si chiama "toString", basta mettere l'oggetto e aggiungere una stringa vuota
console.log(book2.getUpperAuthor());

const magazine1 = new Magazine('operaoggi', '12/06/2023', 'fabbri editore', '23')

console.log(magazine1.toString());
console.log(magazine1.getUpperTitle());

console.log(book2.getUpperTitle());

const schoolBook1 = new SchoolBook('la scienza brutta', 'BarbascuraX', '01/01/2001', 'Mondadori', 'Scienze naturali', '4A');

console.log(schoolBook1.toString());
console.log(schoolBook1.getUpperTitle());

const libraryCollection = [book2, book3, magazine1, schoolBook1];

for (const pub of libraryCollection) {
    console.log(pub.toString())
}


const library1 = new Library([book2, book3, magazine1, schoolBook1]);

console.log(library1);

const gui = new GUI();
gui.start()


// JSON ------------

const student1 = {
    name: 'bryan',
    yob: 1994,
    isMarried: false
}

console.log(student1)

const student1JSON = JSON.stringify(student1);

console.log(student1JSON);

const stringArray = ['qui', 'quo', 'qua'];

const stringArrayJSON = JSON.stringify(stringArray);
console.log(stringArrayJSON);

const student2 = {
    name: 'francesca',
    yob: 1989,
    isMarried: false,
}


// const studentArray = [student1, student2];

// const studentArrayJSON = JSON.stringify(studentArray)
// console.log(studentArrayJSON);

const jsonString = '[{"name":"bryan","yob":1994,"isMarried":false},{"name":"francesca","yob":1989,"isMarried":false}]'

const studentArray = JSON.parse(jsonString);

console.log(studentArray);