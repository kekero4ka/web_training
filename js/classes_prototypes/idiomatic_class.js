function range(from, to) {
    const r = _inherit(range.methods);

    r.from = from;
    r.to = to;

    return r;
}

range.methods = {
    includes: (n) => n > this.from && n < this.to,
    foreach: f => {
        for (let i = this.from; i <= this.to; i++) {
            console.log(f(i));
        }
    }
};

function pow(n) {
    return n * n;
}

function _inherit(p) {
    if (p === null)
        throw new TypeError();
    return Object.create(p);
}

const r = range(1, 3);

console.log('1) create a range from ', r.from + ' to ' + r.to);
console.log('2) range.includes(2): ', r.includes(2));
console.log('3) range.foreach(pow): ');
console.log('range object that is function: ', range);
console.log('r object created based on range.methods: ', r);
r.foreach(pow);