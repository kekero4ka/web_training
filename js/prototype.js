let anim = {
    name: 'Animal',
    eat() {
        console.log('Eat');
    }
}

let cat = {
    meow() {
        console.log('Meow');
    }
}

cat.__proto__ = anim;

/*From now on, cat.eat() call finds the method immediately in the object and executes it, without using the prototype*/
cat.name = 'Kitty';
cat.eat = function() {
    console.log(cat.name + ' eats');
}

cat.eat();

/*
* If we call obj.method(), and the method is taken from the prototype, this still references obj.
* So methods always work with the current object even if they are inherited.
*/
let animal = {
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping);

