export default {
  getUser({user}){
    return user
  },
  getToken({token}){
    return token
  },
  isAuth({token}){
    return !!token
  },
  getRegisteredUser({ userRegister }){
    return userRegister
  },
}