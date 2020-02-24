function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error('Failed to load the script'));

        document.head.append(script);
    })
}

let promise = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js');

promise.then(script => alert(`${script} successfully loaded`),
        error => alert(`${error.message}`));