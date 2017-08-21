function say(time, phrase) {
    alert(`${this.name}: ${phrase} at [${time}]`);
}

let user = { name: "John" };

let messageData = ['10:00', 'Hello']; // become time and phrase

// user becomes this, messageData is passed as a list of arguments (time, phrase)
say.apply(user, messageData);

//[10:00] John: Hello (this=user)