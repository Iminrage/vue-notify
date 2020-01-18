export default {
  state: {
    messages: []
  },
  mutations: {
    setNotify(state, payload) {
      state.messages = payload;
    }
  },
  actions: {
    setNotify({ commit }, payload) {
      commit("setNotify", payload);
    }
  },
  getters: {
    getMessage(state) {
      return state.messages;
    }
  }
};
