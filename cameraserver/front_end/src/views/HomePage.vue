<template>
  <horiz-header></horiz-header>
</template>

<script>
import HorizHeader from '../components/HorizHeader';

// import axios from 'axios';
export default {
  name: 'HomePage',
  components:{
    HorizHeader
  },
  // data() {
  //   return {
  //    items: [],
  //   }
  // },
  // created() {
  //   this.getItems();
  // },
  // methods: {
  //   async getItems() {
  //     try {
  //       let response = await axios.get("/api/photos");
  //       this.items = response.data;
  //       return true;
  //     } catch (error) {
  //       // console.log(error);
  //     }
  //   },
  // }
}
</script>

<style scoped>

</style>
