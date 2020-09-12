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
import { buyMockupRequest } from '../api';
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
    /* Проверка на наличие и присвоение корзины из localstorage */
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
      buyMockupRequest();
      this.buttonText = 'Product in cart';
      this.isClicked = false;
      this.inCart = true;
      this.saveItem();
    },
    /* Сохранение корзины в localstorage */
    saveItem() {
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
      localStorage.setItem('cart', JSON.stringify([...this.cart, this.id]));
    },
    /* Проверка на наличие объекта в корзине */
    isCartItem() {
      const cartItem = this.cart.some((i) => i === this.id);
      return cartItem;
    },
  },
  computed: {
    /* Генерация уникального alt-a для каждого объекта */
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
  &:hover {
    background-color: #2b6cb0;
  }
  outline: none;
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
