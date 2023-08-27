<script setup>
import Header from './components/Header.vue';
import Search from './components/Search.vue'
import Main from './components/Main.vue';
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="top-content grid grid-cols-8 gap-4 h-[500px]">
    <div class="col-start-2 col-span-6 h-full">
      <Header  class=" "/>
      <Search class=" "/>
    </div>

  </div>
  <div class="grid grid-cols-8 gap-4">
      <div class="col-start-2 col-span-6">
        <router-view/>
      </div>
  </div>
  <Footer class="mb-5"/>


</template>


<style>
  .top-content{
    background-image: url('https://images.pexels.com/photos/16736609/pexels-photo-16736609.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1400&dpr=1');
    background-repeat: no-repeat;
    background-size: cover;

    

}
</style>