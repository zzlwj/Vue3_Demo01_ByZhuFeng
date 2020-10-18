import { createStore, Store } from 'vuex'
import * as types from './action-types'
import * as api from '../api/index'

// const store=createStore({ //测试问题时用
export default createStore({
  state: {
    planList:['吃饭','写代码','健身']
  },
  getters:{
    allTime(){
      return 0
    }
  },
  mutations: {
    [types.ADD_PLAN](state,payload){
      state.planList=[...state.planList,payload]
    },
    [types.DELETE_PLAN](state,payload){
      state.planList=state.planList.filter(item=>{
        return item._id!==payload._id
      })
    },
    [types.SET_PLAN_LIST](state,payload){
      state.planList=payload
    },
  },
  actions: {
    //restful API根据方法不同返回不同的资源
    async [types.ADD_PLAN]({commit},payload){
      let plan=await api.addPlan(payload);
      commit(types.ADD_PLAN,plan);
    },
    async [types.DELETE_PLAN]({commit},payload){
      let plan=await api.deletePlan(payload);
      commit(types.DELETE_PLAN,plan);
    },
    async [types.SET_PLAN_LIST]({commit},payload){
      let planList=await api.getPlanList(payload);
      commit(types.SET_PLAN_LIST,planList);
    },
  }
})

//测试问题时用
// window.store=store;
// export default store;
