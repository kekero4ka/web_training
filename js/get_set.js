let user = {
    name: 'Iri',
    surname: 'Mir',

    get full() {
        return `${this.name} ${this.surname}`
    },

    set full(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

console.log(user.full);

user.full = 'Ba Va';

console.log(user.full);

//--------------------------------------------------
let user2 = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log('Value is too short!');
            return;
        }
        this._name = value;
    }
};

user2.name = "Pete";
console.log(user2.name);

user2.name = "";
