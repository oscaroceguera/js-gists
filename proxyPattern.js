const person = {
  name: 'Oscar Oceguera',
  age:  42,
  nationality: "Mexican"
}

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if(!obj[prop]){
      console.log(`Hmm.. this property doesn't seem to exist on the target object`)
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`)
    }
  },
  set: (obj, prop, value) => {
    if(prop === "age" && typeof value !== "number") {
      console.log('Sorr, you can only pass numeric values for age.')
    } else if (prop === "name"  && value.length <  2) {
      console.log('You  need to proi¡vide a valid name.')
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      obj[prop] = value;
    }
  }
})

personProxy.name;
personProxy.age = 36;
personProxy.nationality = 'Cuban'