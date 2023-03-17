<template>
    <div class="products">
    </div>
    <NavBar/>
    <ProductsPage/>
  </template>
  
  <script>
  import ProductsPage from '@/components/ProductsPage.vue'
  
  export default {
    name: 'ProductsView',
    components: {
        ProductsPage
    }
  }
  </script>