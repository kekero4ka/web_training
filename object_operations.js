var ob = {
    left: 1,
    right: 2
};

ob.middle = 3;

console.log(ob.left);
console.log(Object.keys(ob));

delete ob.left;

console.log(ob);
console.log(ob.right);
console.log(ob.left);
console.log("left" in ob);
console.log("right" in ob);
console.log(typeof ob.right);

var obArray = [
    {name: "Iri", age: 27, profession: "QA"},
    {name: "Di", age: 28, profession: "dev"},
    {company: "EV-BOX", size: 50, area: "IT"}
]


