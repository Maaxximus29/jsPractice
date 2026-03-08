//the below line when passed to console.log(valueInNumber) would give the output as NaN
//which mean Not a Number
//let score = "33abc" when we pass this ti valueInNumber this would give a data type of number
//from what I understand data conversions are a big deal in JS because we do not know the type when it comes from an external source
//and ofc a direct value wont be defined in such case a placeholder would be used basically no hard coded values
let score = "33abc"
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)
//null would give out the value 0 in the above line
//others would give NaN if we try to pass in a string as above
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)//true
let anotherIsLoggedIn = ""
let booleanAnotherIsLoggedIn = Boolean(anotherIsLoggedIn)
console.log(booleanAnotherIsLoggedIn)//false for empty string true if it has a value
 let someNumber = 33
 let stringNumber = String(someNumber)
 console.log(typeof(stringNumber))//string

 console.log(stringNumber)// 33 output but it will be a string
 console.log("I can do this and I will do it no matter what")
 console.log("code forces")