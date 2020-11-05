class Dictionary {
    constructor() {
        this.dictionary = {};
    }
    add(key, value) {
        this.dictionary[key] = value;
    }
    get(key) {
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();

phoneBook.add('Oboidol Kader', '017547854322');
phoneBook.add('Bongo Bondho', '017547854547');
phoneBook.add('Sakin', '017547854896');

console.log(phoneBook.dictionary);

const sakin = phoneBook.get("Sakin");

console.log(sakin);
