function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve('promise resolved'), ms));
}

// delay(3000).then(() => console.log('runs after 3 seconds'));
delay(1000).then(success => console.log(success));