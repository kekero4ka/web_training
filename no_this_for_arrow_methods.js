let user = {
    firstName: "Illia",
    sayHi() {
        let arrow = () => alert(this.firstName); // gets 'this' from the outer “normal” function
        arrow();
    }
};

user.sayHi(); // Illia