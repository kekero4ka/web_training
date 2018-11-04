const serialnum = {
    $n: 0, // $ indicates the prop is private
    get next() {
        return this.$n++;
    },
    set next(val) {
        if(val > this.$n) {
            this.$n = val;
        } else throw new Error('serial num can only be set to a larger num');
    }};

console.log('get original serialnum: ', serialnum.next);
console.log('set new  serialnum', serialnum.next(2));
console.log('get new serialnum: ', serialnum.next);