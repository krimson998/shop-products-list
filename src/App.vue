<template>
  <div id="app">
    <NavBar />
    <div class="wrapper">
      <div class="items-container">
        <ProductCard
          v-for="product in productsList"
          :key="product.id"
          :title="product.title"
          :imgURL="product.thumbnailUrl"
          :id="product.id"
        >
        </ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from './components/NavBar.vue';
import ProductCard from './components/ProductCard.vue';
export default {
  components: {
    ProductCard,
    NavBar,
  },
  name: 'App',

  data() {
    return {
      productsList: [],
      startListItem: 50,
      endListItem: 100,
      newList: [],
    };
  },
  mounted() {
    this.scroll();
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        this.productsList = response.data.slice(0, 50);
        console.log(this.productsList);
      });
  },
  methods: {
    scroll() {
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
          axios
            .get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
              this.newList = response.data.slice(
                this.startListItem,
                this.endListItem
              );
              this.productsList = [...this.productsList, ...this.newList];
              this.startListItem += 50;
              this.endListItem += 50;
              console.log(this.productsList);
            });
        }
      };
    },
  },
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
