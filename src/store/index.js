import { createStore } from 'vuex'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    loadSpinner: true
  },
  mutations: {
    setUsers(state, values){
      state.users = values
    },
    setProducts(state, values) {
      state.products = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProduct(state, value){
      state.product = value
    },
    setSpinner(state, value) {
      state.loadSpinner = value
    },
  },
  actions: {
    getUsers: async(context) => {
      // fetch(`${backendURL}users`)
      //   .then((res) => res.json())
      //   .then((users) =>{
      //     console.log(users);
      //     context.commit("setUsers", users);
      //   });
      const res = await axios.get(`${backendURL}users`);
      const {results} = await res.data;
      if(results) {
        console.log(results)
        context.commit('setUsers', results);
      }
    },
    getProducts: async(context) => {
      const res = await axios.get(`${backendURL}products`);
      const {results} = await res.data;
      if(results) {
        console.log(results)
        context.commit('setProducts', results);
      }
    },
    getUser: async(context) => {
      const res = await axios.get(`${backendURL}user`);
      const {results} = await res.data;
      if(results) {
        console.log(results)
        context.commit('setUser', results);
      }
    },
    getProduct: async(context) => {
      const res = await axios.get(`${backendURL}product`);
      const {results} = await res.data;
      if(results) {
        console.log(results)
        context.commit('setProduct', results);
      }
    },
    register: async(context, payload) => {
      const {firstName, lastName, gender, cellphoneNumber, emailAdd, userPass, userRole, userProfile, joinDate} = payload
      const res = await fetch('https://full-stack-group.onrender.com/users',{
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          gender,
          cellphoneNumber,
          emailAdd,
          userPass,
          userProfile,
          joinDate
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
      },
      async login(context, payload) {
        const res = await axios.post(`${backendURL}login`, payload);
        const {result, err} = await res.data;
        if(result) {
          context.commit('setUser', result);
        }else{
          context.commit('setMessage', err)
        }
      },
      async register(context, payload) {
        let res = await axios.post(`${backendURL}register`, payload);
        let {msg, err} = await res.data;
        if(msg) {
          context.commit('setMessage', msg);
        }else{
          context.commit('setMessage', err);
        }
      },
      async editUser (context, payload) {
        const res = await axios.put(`${backendURL}editUser`, payload)
        const { msg, err } = await res.data
        if (msg) {
          context.commit('setUser', msg)
        } else {
          context.commit('setMessage', err)
        }
      },
      async editProduct (context, payload) {
        const res = await axios.put(`${backendURL}editProduct`, payload)
        const { msg, err } = await res.data
        if (msg) {
          context.commit('setProduct', msg)
        } else {
          context.commit('setMessage', err)
        }
      },
      async deleteProduct (context, payload) {
      const res = await axios.delete(`${backendURL}deleteProduct`, payload)
      const { msg, err } = await res.data
      if (msg) {
        context.commit('setProduct', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
  },
  modules: {
  }
})
