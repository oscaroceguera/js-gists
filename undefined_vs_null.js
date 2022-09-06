// DIFFERENCES BETWEEN UNDEFINED AND NULL

/*
** UNDEFINED
** - Is the default value of variables that has no been assigned a specific value.
** - Or a function that has no explicit return value.
** - Or a property that does not exist in an object.
** - The JS engine does this for us the assigning of "undefined" value.
*/

let _thisUndefined;
const doNothing = () => {}
const someObj = {
  a: 'ay',
  b: 'bee',
  c: 'si'
}

console.log(_thisUndefined) // undefined
console.log(doNothing()) // undefined
console.log(someObj["d"]) // undefined

/*
** NULL
** - Is a value that represents no value.
** - Null is value that has been explicitly defined to a variable.
*/

console.log(null == undefined) // true
console.log(null === undefined) // false
