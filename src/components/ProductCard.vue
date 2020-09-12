<template>
  <div class="card-wrapper">
    <div class="card">
      <img class="product-img" :src="imgURL" :alt="altGenerator" />
      <div class="product-title">
        {{ title }}
        {{ id }}
      </div>
      <button
        :disabled="inCart"
        @click="buy"
        :class="{
          'active-btn': !inCart,
          'disabled-btn': inCart,
        }"
      >
        <span v-show="!isClicked">{{ buttonText }}</span
        ><span v-show="isClicked" class="loader"></span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    imgURL: String,
    title: String,
    id: Number,
  },
  data() {
    return {
      buttonText: 'Buy',
      isClicked: false,
      inCart: false,
      cart: {
        items: [],
      },
    };
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (this.isCartItem()) {
      this.buttonText = 'Product in cart';
      this.isClicked = false;
      this.inCart = true;
    }
  },
  methods: {
    buy() {
      this.isClicked = true;
      console.log(this.id);
      axios
        .get('https://reqres.in/api/products/3')
        .then((response) => {
          console.log(response.data);
          this.buttonText = 'Product in cart';
          this.isClicked = false;
          this.inCart = true;
        })
        .catch((e) => {
          return e;
        });
      this.saveItem();
    },
    saveItem() {
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
      localStorage.setItem('cart', JSON.stringify([...this.cart, this.id]));
    },
    isCartItem() {
      const a = this.cart.some((i) => i === this.id);
      return a;
    },
  },
  computed: {
    altGenerator() {
      return `Product #${this.id}`;
    },
  },
};
</script>

<style lang="scss" scoped>
$default-space: 1rem;
.card-wrapper {
  margin-bottom: 2rem;
}
.card {
  width: 200px;
  position: relative;
  height: 100%;
  margin-right: $default-space;
  margin-left: $default-space;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  padding-bottom: $default-space;
  img {
    width: 150px;
    height: 150px;
    padding-top: $default-space;
    margin: auto;
  }
  div {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    text-align: center;
    font-size: 0.875rem;
    min-height: 70px;
  }
}
.loader {
  width: 15px;
  height: 15px;
}
.active-btn {
  background-color: #4299e1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 80%;
  user-select: none;
  cursor: pointer;
  border-radius: 4px;
  border: 0 solid #000;
  color: white;
  font-size: $default-space;
  margin: auto;
  outline:none &:hover {
    background-color: #2b6cb0;
  }
}
.disabled-btn {
  background-color: #63b3ed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 80%;
  user-select: none;
  cursor: pointer;
  border-radius: 4px;
  border: 0 solid #000;
  color: white;
  font-size: $default-space;
  margin: auto;
  cursor: default;
  outline: none;
}
</style>
