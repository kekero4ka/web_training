let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 50
};

function topSalary(ob) {
    let val = 0;
    let entries = Object.entries(ob);

    if (entries.length === 0) {
        return null;
    }
    else {
        entries.forEach((e, i) => {
            if (e[1] > val) {
                val = e[1];
            }
        });
        return entries.filter(e => e[1] === val);
    }
}

console.log(topSalary({}));
console.log(Object.entries(salaries));