const animal = {
    makeSound: function (sound) {
        console.log(sound);
    }
}

const cat = Object.create(animal);
cat.makeSound('Meow');




