<script setup>
import { RouterView, useRoute } from "vue-router";
import Navbar from "./components/partials/Navbar.vue";
import Footer from "./components/partials/Footer.vue";

const route = useRoute();
</script>

<template>
  <main class="font-sans min-h-screen">
  
        <Navbar  v-if="!['/login', '/register'].includes(route.path)" /> 
        
      <router-view></router-view>
 
    <!-- Sembunyikan Footer di Halaman Login & Register -->
    <Footer v-if="!['/login', '/register'].includes(route.path)" />
  </main>

  
</template>



