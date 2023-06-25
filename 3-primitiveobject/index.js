// nn bb ss u - Primitives in Js
//  nn - number null
//  bb - boolean bigint
//  ss - symbol string
//  u - undefined
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "temp"
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c , d, e, f, g)
console.log(typeof c)

// Non Primitive Data Type - Objects in Js
const item = {
  "aa": true,
  "bb": false,
  "cc": 67,
  "dd": undefined
}
console.log(item["aa"])