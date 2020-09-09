<template>
  <div id="app">
    <NavBar />
    <div class="wrapper">
      <div class="items-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ProductCard from './components/ProductCard.vue';
export default {
  components: {
    ProductCard,
    NavBar,
  },
  name: 'App',
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
.items-container {
  width: 90%;
  height: 100%;
  margin: auto;
  padding-top: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
}
.wrapper {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
}
</style>
