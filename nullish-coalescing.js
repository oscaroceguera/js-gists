const data = {
  description: 'description',
  completed: false,
  user: undefined
}

const userNameRoDisplay = data.user?.userName ?? 'anonymous user'

console.log('userNameRoDisplay', userNameRoDisplay)

const demoObject = {
  test1: 'Hello world 1'
}

// since the below value doesn't exist it will be assigned 'hi there'
demoObject.test2 ??= 'hi there'
data.user?.age ?? 36