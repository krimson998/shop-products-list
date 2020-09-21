<template>
  <div class="app">
    <div>
      <NavBar />
      <div class="wrapper">
        <div class="items-container">
          <!-- Передача всех данных в компонент -->
          <ProductCard
            v-for="product in allProducts"
            :key="product.id"
            :title="product.title"
            :imgURL="product.thumbnailUrl"
            :id="product.id"
          >
          </ProductCard>
        </div>
      </div>
    </div>
    <div class="loader-container" v-show="showLoader">
      <span class="loader"></span>
    </div>
  </div>
</template>

<script>
/* ajax функции для получения данных */

import { mapGetters, mapActions } from 'vuex';
import NavBar from './components/NavBar.vue';
import ProductCard from './components/ProductCard.vue';
export default {
  components: {
    ProductCard,
    NavBar,
  },
  computed: mapGetters(['allProducts', 'showLoader']),
  async mounted() {
    this.firstList();
    var myEfficientFn = this.debounce(this.scroll(), 2000);
    window.addEventListener('resize', myEfficientFn);
  },
  methods: {
    ...mapActions(['firstList', 'scroll']),
  },
  debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
$container-width: 90%;
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
.app {
  display: flex;
  flex-direction: column;
}
.items-container {
  width: $container-width;
  height: 100%;

  padding-top: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.wrapper {
  width: $container-width;
  margin: auto;
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
}
.loader-container {
  margin: auto;
  width: 50px;
  height: 50px;
  padding-bottom: 3rem;
}
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 2s linear infinite;
  display: inline-block;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
