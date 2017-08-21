let user = {
    name: 'Iri',
    surname: 'Mir',

    get full() {
        return '${name} ${surname}'
    },

    set full(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

console.log(user.surname);

user.name = 'Vi',
    user.surname = 'Mat';