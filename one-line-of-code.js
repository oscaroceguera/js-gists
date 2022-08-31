// GET THE NUMBER OF CHARACTERS IN A STRING 
const characterCount = (str, char) => str.split(char).length - 1
console.log('characterCount =>', characterCount('ferrocarril', 'r'))

// CHECK IF THE OBJECT IS EMPTY
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 &&  obj.constructor === Object
console.log('isEmpty =>', isEmpty({}))