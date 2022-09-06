// MUTABLE & IMMUTABLE

/*
* Mutable: only objects and arrays, not primitive values.
*
* Mutable object is an object whose state can be modified after it is created.
*
* Immutables are the objects whose state cannot be changed once the object is 
created.
*
* What does immutable mean?
* If a item is mutable, modify the copy also modifies the original.
* If it's immutable, modify the copy doesn't affect the original.
*/

const log = console.log

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

log(num2) // 32
log(str2) // Hello world

log(num1) //  42
log(str1) //  'Hello'

var arr2 = arr1
var obj2 = obj1

// update copies
arr2.push(4,5,6)
obj2.name = 'universe'

log(arr2) // [ 1, 2, 3, 4, 5, 6 ]
log(obj2) //  { greeting: 'helo', name: 'universe' }

log(arr1) // [ 1, 2, 3, 4, 5, 6 ]
log(obj1) //  { greeting: 'helo', name: 'universe' }


let person = {
  name: 'oscar',
  age: 8
} 

let person2 = person

log(person)
log(person2)

person2.name = 'carlos'

log(person)
log(person2)

let person3 = {...person}
person3.name = 'saul'

log(person)
log(person3);

