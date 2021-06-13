import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export const auth = {
  namespaced:true,
  state,
  actions,
  mutations,
  getters
}