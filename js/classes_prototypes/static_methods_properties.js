/**
 * We can also assign a method to the class function itself, not to its "prototype". Such methods are called static.
 * In a class, they are prepended by static keyword, like this:
 */
class User1 {
    static staticMethod() {
        console.log(this === User1);
    }
}

User1.staticMethod();

// That actually does the same as assigning it as a property directly:
class User2 {
}

User2.staticMethod = function () {
    alert(this === User2);
};

// example
class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}

let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

console.log(articles[0].title); // CSS

/**
 * Another example would be a so-called “factory” method. Imagine, we need few ways to create an article:

 Create by given parameters (title, date etc).
 Create an empty article with today’s date.
 …or else somehow.

 The first way can be implemented by the constructor. And for the second one we can make a static method of the class.
 */

class Article2 {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static createTodays() {
        // remember, this = Article
        return new this("Today's digest", new Date()); // !!! <=
    }
}

let article = Article2.createTodays();

console.log(article.title); // Today's digest

/**Static methods are also used in database-related classes to search/save/remove entries from the database, like this:
 assuming Article is a special class for managing articles
 static method to remove the article:
 */
Article2.remove({id: 12345});

// This is a recent addition to the language. Examples work in the recent Chrome.
class Article3 {
    static publisher = "Ilya Kantor";
}

console.log(Article3.publisher); // Ilya Kantor
// That is the same as a direct assignment to Article:

Article3.publisher = "Ilya Kantor";

/**
 Inheritance of static methods
 Static methods are inherited.
 */
class Animal {

    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }

    run(speed = 0) {
        this.speed += speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }

}

/**
 * So, Rabbit extends Animal creates two [[Prototype]] references:

 Rabbit function prototypally inherits from Animal function.
 Rabbit.prototype prototypally inherits from Animal.prototype.
 
 As the result, inheritance works both for regular and static methods.
 */
class Rabbit extends Animal {
    hide() {
        alert(`${this.name} hides!`);
    }
}

let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run();