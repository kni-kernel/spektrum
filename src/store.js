import Vue from "vue";
import Vuex from "vuex";
import Firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex);

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export default new Vuex.Store({
  state: {
    user: Firebase.auth().currentUser,
    loggedIn: !!Firebase.auth().currentUser
  },
  mutations: {
    [LOGIN](state) {
      state.user = Firebase.auth().currentUser;
      state.loggedIn = true;
    },
    [LOGOUT](state) {
      state.user = null;
      state.loggedIn = false;
    }
  },
  actions: {
    login({ commit }) {
      let provider = new Firebase.auth.GoogleAuthProvider();
      return Firebase.auth()
        .signInWithPopup(provider)
        .then(() => commit(LOGIN));
    },
    logout({ commit }) {
      return Firebase.auth()
        .signOut()
        .then(() => commit(LOGOUT));
    }
  },
  getters: {
    getUser: state => {
      return state.user;
    },
    getLoginState: state => {
      return state.loggedIn;
    }
  }
});
