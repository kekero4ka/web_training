const months = function() {
    const names = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    return {
        name: number => names[number-1],
        number: name => names.indexOf(name)+1
    };
}();

console.log(months.name(12));
console.log(months.number('May'));
console.log(months);