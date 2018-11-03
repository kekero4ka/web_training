var map = {}

function addEntry(entry, occurrence){
    map[entry] = occurrence;
}

addEntry("pizza", 0.6);
addEntry("party", 2);

console.log("pizza" in map);
console.log(map["party"]);

for(var e in map){
    console.log("The occurrence of " + e + " is " + map[e]);
}
//-------------------------
var map = {}

map["a"] = "Ira";
map["b"] = "Vi";
map["c"] = "Di";

//overrides
map["c"] = "Bo";
//-------------------------
var myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

console.log(myMap.size);   //works
console.log(myMap.has("olo")); //works
//-------------------------
var map = {}

function addEntry(entry, occurrence){
    map[entry] = occurrence;
}

addEntry("pizza", 0.6);
addEntry("party", 2);

console.log(map.size); //doesn't work - why?
console.log(myMap.has("olo")); //doesn't work - why?