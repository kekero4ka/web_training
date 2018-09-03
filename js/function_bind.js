let user = {
    firstName: "John"
};

function func() {
    console.log('Hoi, ' + this.firstName);
}

let funcUser = func.bind(user);
funcUser();