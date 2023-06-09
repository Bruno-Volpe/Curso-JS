type User = {
  username: string
  password: string
}

type VerifyUserFn = (user: User, sentValue: User) => boolean

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  )
}

const bdUser = { username: 'Bruno', password: '123556' }
const sentUser = { username: 'Bruno', password: '123556' }

const loggedIn = verifyUser(bdUser, sentUser)
console.log(loggedIn)

export { VerifyUserFn }
