import { http } from "../../services/api"

export default {
    async login({ commit }, payload){
      return await http.post('/api/auth/signin', payload).then(resp => {
        commit('LOGIN_SUCCESS', resp)
        return resp
      })
    },
    async register({ commit }, payload){
      return await http.post('/api/auth/signup', payload).then(resp => {
        commit('REGISTER_SUCCESS', resp)
        return resp
      })
    }
}