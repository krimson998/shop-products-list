<template>
  <div class="card">
    <img
      class="product-img"
      src="https://via.placeholder.com/150/92c952"
      alt="product"
    />
    <div class="product-title">
      accusamus beatae ad facilis cum similique qui sunt
    </div>
    <button class="buy-button">Buy</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  width: 200px;
  height: 100%;
  margin-right: 1rem;
  margin-left: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}
.product-img {
  width: 150px;
  height: 150px;
  padding-top: 1rem;
  margin: auto;
}
.product-title {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: center;
  font-size: 0.875rem;
}
.buy-button {
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
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
  font-size: 1rem;
  margin: auto;
}
</style>
