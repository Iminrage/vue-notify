export default {
  state: {
    messages: []
  },
  mutations: {
    setMessages(state, payload) {
      state.messages = payload;
    }
  },
  actions: {
    setMessages({ commit }, payload) {
      commit("setMessages", payload);
    }
  },
  getters: {
    getAllMessages(state) {
      return state.messages;
    },
    getMainMessages(state) {
      return state.messages.filter(message => {
        if (message.main) {
          return true;
        }
      });
    }
  }
};
