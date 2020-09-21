/* import {getFirstList} from '../../api/index' */
import axios from 'axios';

export default {
  state: {
    productsList: [],
    startListItem: 50,
    endListItem: 100,
    showLoader: false,
    buttonText: 'Buy',
    isClicked: false,
    inCart: false,
    cart: {
      items: [],
    },
  },
  actions: {
    async firstList(ctx) {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/photos'
        );
        /* Получение первых 50 продуктов из всего массива */
        const firstList = res.data.slice(0, 50);
        console.log(firstList);
        ctx.commit('fetchFirstList', firstList);
      } catch (e) {
        throw new Error(e);
      }
    },
    async fetchNextList({ commit, getters }) {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/photos'
        );
        /* Получение следующих 50 продуктов из массива */
        const newList = res.data.slice(
          getters.startListItem,
          getters.endListItem
        );
        commit('updateList', newList);
        commit('updateStartEndItems');
      } catch (e) {
        throw new Error(e);
      }
    },
    /* Функция которая детектит когда юзер скролит к нижнему значению страницы и возвращает true */
    scroll({ dispatch, commit }) {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          /* Если юзер находится снизу страницы, происходит запрос на следующие 50 продуктов */
          commit('loaderOn');
          dispatch('fetchNextList');
        } else {
          commit('loaderOff');
        }
      };
    },
  },
  mutations: {
    fetchFirstList(state, firstList) {
      state.productsList = firstList;
    },
    updateList(state, newList) {
      state.productsList = [...state.productsList, ...newList];
    },
    updateStartEndItems(state) {
      state.startListItem += 50;
      state.endListItem += 50;
    },
    loaderOn(state) {
      state.showLoader = true;
    },
    loaderOff(state) {
      state.showLoader = false;
    },
  },
  getters: {
    allProducts(state) {
      return state.productsList;
    },
    startListItem(state) {
      return state.startListItem;
    },
    endListItem(state) {
      return state.endListItem;
    },
    showLoader(state) {
      return state.showLoader;
    },
  },
};
