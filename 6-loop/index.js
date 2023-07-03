for (let i = 1; i < 34;i++)
{
console.log(i)
}

let sum = 0
let n = prompt("Enter the value of n")

for (let i = 0; i < n; i++) {
sum += (i + 1)
}
console.log("Sum of first " + n + " natural numbers is " + sum)


let obj = {
    vish: 12,
    y:10
}
// for in loop
for (let a in obj)
{
    console.log(a +" " +obj[a] )
}

//  for of loop
for (let b of "Vish")
{
    console.log(b)
}