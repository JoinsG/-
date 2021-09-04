
const state = {
    userInfo:null,
}

const getters = {
    getUserInfo(state){
        return state.userInfo;
    },
}


const actions = {
    increment({commit}){
        // commit(types.INCREMENT)
    }
}


const mutations = {
    // [types.INCREMENT](state){
    //     state.countA++;
    // }
    setUserInfo(state,val){
        state.userInfo = val;
    }
}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}