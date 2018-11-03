function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function (vector) {
    const x = this.x + vector.x;
    const y = this.y + vector.y;

    return new Vector(x, y);
};

Vector.prototype.minus = function (vector) {
    const x = this.x - vector.x;
    const y = this.x - vector.x;

    return new Vector(x, y);
};

Object.defineProperty(Vector.prototype, 'lengthProp', {
    get: function() {
       return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
});

const vector1 = new Vector(2, 2);
const vector2 = new Vector(3, 4);

console.log(vector1.plus(vector2));
console.log(vector2.minus(vector1));
console.log(vector2.lengthProp);