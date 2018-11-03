var arr = [1, 2, 3];
//
// //{value: 1, next: {value:2, next: {value: 3, next{...}}}}
// function List() {
//     this.start = null;
//     this.end = null;
//
//     this.add = function(value) {
//         if (this.start === null) {
//             this.start = List.createNode();
//             this.end = this.start;
//         }
//         else {
//             this.end.next = List.createNode();
//             this.end=this.end.next;
//         }
//         this.end.value=value;
//     }
// }
//
// List.createNode = function() {
//     return {value: null, next: null}
// }
//
// function arrToList(arr) {
//     var list = new List();
//
//     for (var i = 0; i < arr.length; i++) {
//         list.add(arr[i]);
//     }
//     return list;
// }
//
// console.log(arrToList(arr));

function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--)
        list = {value: array[i], rest: list};
    return list;
}

console.log(arrayToList(arr));