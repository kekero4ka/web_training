var res = "";
var size = 5;
for(var i = 0; i < size; i++) {
    for (var o = 0; o < size; o++) {
        if ((i + o)%2 != 0)
            res += "#";
        else res += " ";
    }
    res += "\n";
}
console.log(res);

