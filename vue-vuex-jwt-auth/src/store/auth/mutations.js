/* eslint-disable no-console */
import { http } from '@/services/api';

export default {
  LOGIN_SUCCESS(state, payload){
    state.user = payload.data
    state.token = payload.data.accessToken
    http.defaults.headers = {
      "x-access-token": state.token
    }
  },
  LOGIN_ERROR(state){
    state.user = null
    state.token = ''
  },
  REGISTER_SUCCESS(state, payload){
    state.userRegister = payload
  },
  REGISTER_ERROR(state){
    state.userRegister = null
  }
}