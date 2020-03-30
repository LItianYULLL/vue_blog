import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    isSigned: false,
    user: null,
    queryString:''
}
const mutations = {
    setIsSigned(state) {
        state.isSigned = true;
    },
    removeIsSigned(state){
        state.isSigned = false;
    },
    addUser(state, user) {
        state.user = user;
    },
    removeUser(state) {
        state.user = null;
    },
    addQueryString(state,queryString){
        state.queryString = queryString;
    },
    removeQueryString(state){
        state.queryString = "";
    }
}
const getters = {
    getUser(state) {
        return state.user;
    },
    getIsSigned(state) {
        return state.isSigned;
    },
    getQueryString(state){
        return state.queryString;
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters
})