
<template>
  <div class="container">
    <div v-for="product in data" :key="product.id">
      <h1>{{product.name}}</h1>
    </div>
  </div>
</template>


<script>
/* eslint-disable no-console */
  import { http } from '@/services/api';
  export default {
    name: "Home",
    data(){
      return {
        data:[]
      }
    },
    async created(){
      console.log('test')
      await this.getAllData();
    },
    methods:{
      async getAllData(){
        const {data:products} = await http.get('/api/products/all')
        this.data = products;
      }
    }
  }
</script>