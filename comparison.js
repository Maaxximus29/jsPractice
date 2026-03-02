console.log(2 > 1)
console.log( 2 >= 1)
//these will give the expected answe
//but if two different types are compared
console.log("2" > 1)// here conversion takes place
console("02" > 1)// here conversion takes place
//although these two give the desired result
//Its a bad practice to do it this way
//TypeScript stops this from happening
console.log( null > 0)//false
console.log( null >= 0)//true
console.log(null == 0)//false
//the reason is that an equality check convert null to a number, treating it as 0.
// and the reason == produces false is due to the fact it works differently than other comparision operators
// same issues with undefined but it will give out false for all the above three operations
// === strict check meaning it checks the value as well
console.log("2" === 2) // no conversion here 