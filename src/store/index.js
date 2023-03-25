import { createStore } from 'vuex'
import axios from 'axios';
const renderURL = "https://the-shoe-clinic.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
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
    }
  },
  actions: {
    getUsers: async(context) => {
      const res = await axios.get(`${renderURL}users`);
      const {results} = await res.data;
      if(results) {
        console.log(results)
        context.commit('setUsers', results);
      }
    },
    getProducts: async(context) => {
      const res = await axios.get(`${renderURL}products`);
      const {results} = await res.data;
      if(results) {
        console.log(results)
        context.commit('setProducts', results);
      }
    },
    getUser: async(context) => {
      const res = await axios.get(`${renderURL}user`);
      const {results} = await res.data;
      if(results) {
        console.log(results)
        context.commit('setUser', results);
      }
    },
    getProduct: async(context) => {
      const res = await axios.get(`${renderURL}product`);
      const {results} = await res.data;
      if(results) {
        console.log(results)
        context.commit('setProduct', results);
      }
    },
    register: async(context, payload) => {
      const {name, surname, cellnumber, email, password, imgURL,gender, shipping_address, regDate} = payload
      const res = await fetch('https://the-shoe-clinic.onrender.com/users',{
        method: "POST",
        body: JSON.stringify({
          name,
          surname,
          cellnumber,
          email,
          password,
          imgURL,
          gender,
          shipping_address,
          regDate
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
      },
      async login(context, payload) {
        const res = await axios.post(`${renderURL}login`, payload);
        const {result, err} = await res.data;
        if(result) {
          context.commit('setUser', result);
        }else{
          context.commit('setMessage', err)
        }
      },
      async register(context, payload) {
        let res = await axios.post(`${renderURL}register`, payload);
        let {msg, err} = await res.data;
        if(msg) {
          context.commit('setMessage', msg);
        }else{
          context.commit('setMessage', err);
        }
      },
      async editUser (context, payload) {
        const res = await axios.put(`${renderURL}editUser`, payload)
        const { msg, err } = await res.data
        if (msg) {
          context.commit('setUser', msg)
        } else {
          context.commit('setMessage', err)
        }
      },
      async editProduct (context, payload) {
        const res = await axios.put(`${renderURL}editProduct`, payload)
        const { msg, err } = await res.data
        if (msg) {
          context.commit('setProduct', msg)
        } else {
          context.commit('setMessage', err)
        }
      },
      async deleteProduct (context, payload) {
      const res = await axios.delete(`${renderURL}deleteProduct`, payload)
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
