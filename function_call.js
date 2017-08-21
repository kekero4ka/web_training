function getName(welcome) {
    return welcome + this.name;
}

let user = {
    name: 'Iri'
}

console.log(getName.call(user, 'Hoi, '));