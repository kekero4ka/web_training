// E.X is constant, X is assigned a value 0 automatically
// Y does not have an initializer and the preceding enum member was a numeric constant.
// In this case the value of the current enum member will be the value of the preceding enum member plus one.

enum E {
    X, Y, Z
}

//Reverse mappings
// In addition to creating an object with property names for members, numeric enums members also get a reverse mapping from enum values to enum names. For example, in this example:
//
enum Enum {
  A
}

let a = Enum.A;
let nameOfA = Enum[a]; // "A"
