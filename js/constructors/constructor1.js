function Ball (type) { // constructor is always anticipated with function keyword and its name is capitalized
    this.type = type;
}

// add a function to the constructor and all balls that will be created using it
Ball.prototype.getBallType = function() {
    return this.type;
};

console.log(Ball.prototype); // by def constructors have a property prototype that holds an empty object
 // Ball {}

let ball = new Ball('football');
console.log(ball.getBallType());

// add a property to prototype
Ball.prototype.colour = 'black';
// property added directly to the object will prevail
ball.colour = 'red';

console.log(ball.colour);


