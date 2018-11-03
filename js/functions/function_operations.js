var journal = []

function addToJournal(itGuys) {
    var entry = {names: [], itGuys: itGuys};
    for (var i = 1; i < arguments.length; i++) {
        entry.names.push(arguments[i]);
    }
    journal.push(entry);
}

addToJournal(false, "Ivan", "Vi", "Alex");
addToJournal(true, "Iri", "Andrew", "Di");

//possible functions
console.log(journal[0]);
console.log(journal[1].itGuys);
console.log(journal);