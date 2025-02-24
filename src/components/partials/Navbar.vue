<template>
  <nav class="fixed top-0 w-full shadow-md bg-white dark:bg-gray-800 dark:text-white z-50">
    <div class="px-5 lg:px-10 flex justify-between items-center py-4">
      <!-- Logo -->
      <div class="flex items-center">
        <a href="/">
          <span class="text-xl font-semibold ml-2">BookStore</span>
        </a>
      </div>

      <!-- Menu -->
      <ul class="hidden md:flex gap-8 flex-1 justify-center">
        <li>
          <router-link to="/" class="hover:text-blue-600 transition-all duration-300 ease-in-out" active-class="text-blue-600 font-bold">
            Home
          </router-link>
        </li>
        <li>
          <router-link
            v-if="useStore.tokenUser"
            :to="isAdmin ? '/create-book' : '/book'"
            class="hover:text-blue-500 transition-all"
            active-class="text-blue-600 font-bold"
          >
            Book
          </router-link>
          <router-link
            v-else
            to="/login"
            class="hover:text-blue-500 transition-all"
            active-class="text-blue-600 font-bold"
          >
            Book
          </router-link>
        </li>
        <li v-if="isAdmin">
          <router-link to="/create-genre" class="hover:text-blue-500 transition-all" active-class="text-blue-600 font-bold">
            Genre
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-blue-500 transition-all" active-class="text-blue-600 font-bold">
            About
          </router-link>
        </li>
        <li>
          <router-link to="/contact" class="hover:text-blue-500 transition-all" active-class="text-blue-600 font-bold">
            Contact
          </router-link>
        </li>
      </ul>

      <!-- Theme Switcher & User Actions -->
      <div class="flex items-center gap-4">
        <!-- Dark Mode Toggle -->
        <button @click="toggleDark()" :class="isDark ? 'text-gray-100' : 'text-yellow-500'">
          <el-icon v-if="isDark" :size="20"><Moon /></el-icon>
          <el-icon v-else :size="20"><Sunny /></el-icon>
        </button>

        <!-- Jika user login, tampilkan profile & cart -->
        <div v-if="useStore.tokenUser" class="flex items-center gap-4">
          <router-link to="/shop">
            <Icon icon="iconamoon:shopping-card-thin" width="30" class="hover:text-blue-500 transition-all" />
          </router-link>

          <router-link to="/profile" class="flex items-center gap-2 hover:text-blue-500 transition-all">
            <Icon icon="material-symbols-light:person-outline" width="30" />
            <span class="text-sm font-medium">{{ useStore.currentUser?.name }}</span>
          </router-link>
        </div>

        <!-- Jika guest, tampilkan login & register -->
        <div v-else class="flex items-center gap-2">
          <router-link to="/login" class="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
            Login
          </router-link>
          <router-link to="/register" class="px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-all">
            Register
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useAuthStorage } from "@/stores/authStorage";
import { Moon, Sunny } from "@element-plus/icons-vue";
import { Icon } from "@iconify/vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const useStore = useAuthStorage();
const isAdmin = computed(() => useStore.currentUser?.role?.name === "admin");
</script>

<style>
nav {
  border-bottom: none;
}
</style>
