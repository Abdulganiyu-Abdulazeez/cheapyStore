<script>
  import { defineComponent } from 'vue';
  import navbar from "./components/navbar.vue"
  import store from "./store/store"
  export default defineComponent ({
    components: {navbar},
    data() {
      return {
        myComponent: 'banner',
        shop: store().$state.array
      }
    },
    mounted() {
      fetch('https://fakestoreapi.com/products/').then(response => response.json())
      .then(data =>{
        const take = data
        store().$state.array = take
        this.shop = take
        console.log(this.shop)
      })
    }
  })
</script>

<template>
  <header class="w-full h-screen bg-blue-300 header overflow-hidden">
    <navbar @cloth="myComponent='clothing'" @jewelery="myComponent='jewelery'" @electronic="myComponent='electronics'" @logo="myComponent='banner'"/>
    <!-- <component :is="myComponent" :mall="array"></component> -->
    <router-view></router-view>
  </header>
</template>

<style>
  .header {
    width: 100%;
    height: fit-content;
    background-color: aliceblue;
  }
</style>