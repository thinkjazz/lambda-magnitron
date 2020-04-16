import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products:[],
        cart:[],
    },
    mutations: {
        SET_PRODUCT_TO_STATE: (state, products) => {
            state.products = products
        },
        SET_CART: (state, product) => {
            state.cart.push(product)
        }
    },
    actions: {
        //AXIOS EXAMPLE
        // GET_PRODUCT_FROM_API({commit}) {
        //     let url = 'http://localhost:3000/products';
        //     return Axios(url, {
        //         method: "GET"
        //     })
        //         .then((products) => {
        //         commit('SET_PRODUCT_TO_STATE', products.data);
        //         return products
        //     })
        //         .catch(error  => {
        //             console.log(error)
        //             return error
        //         })
        // }
         GET_PRODUCT_FROM_API({commit}) {
            let url = 'http://localhost:3000/products';
            fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then((products) => {
                commit('SET_PRODUCT_TO_STATE', products);
                    console.log(products)
                    return (products)
            })
                .catch(error  => {
                    console.log(error)
                    return error
                })
        },
        ADD_TO_CART({commit}, product) {
             commit('SET_CART', product);
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state){
            return state.cart;
        }

    }
});

export default store

