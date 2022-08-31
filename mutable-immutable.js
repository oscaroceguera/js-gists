// MUTABLE & IMMUTABLE

var num1 = 42
var str1 = 'Hello'
var arr1 = [1,2,3]
var obj1 = {greeting: 'helo', name: 'world'}

// copy items
var num2 = num1
var str2 = str1

// update the copies
num2 = num2 - 10
str2 += ' world'

console.log(num1)
console.log(str1)

var arr2 = arr1
var obj2 = obj1

//  update copies