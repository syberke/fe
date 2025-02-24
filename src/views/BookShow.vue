<template>
  <div class="dark:bg-gray-900 bg-white text-white p-8 shadow-lg w-full min-h-screen flex justify-center">
    <div class="max-w-screen-lg w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        <!-- Cover Buku -->
        <div class="relative bg-white shadow-lg dark:bg-gray-800 rounded-lg overflow-hidden flex justify-center items-center">
          <img v-if="book.cover_image" class="h-[450px] object-cover" :src="book.cover_image" alt="Book Cover" />
          <div v-else class="w-full h-96 flex items-center justify-center bg-gray-700 rounded-lg">
            <span class="text-gray-400">Image Not Available</span>
          </div>
        </div>

        <!-- Detail Buku -->
        <div class="flex flex-col justify-center px-6">
          <p class="text-black dark:text-gray-200 text-sm">{{ book.author }}</p>
          <h1 class="text-4xl font-bold text-black dark:text-gray-200 mt-2">{{ book.name }} ({{ book.year }})</h1>

          <p class="text-black dark:text-gray-200 mt-6 text-lg pb-5 border-b-2 border-gray-100">
            {{ book.description }}
          </p>

          <div class="flex justify-between mt-4">
            <span class="text-black dark:text-white px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700">
              Stock: {{ book.stock }}
            </span>
          </div>

          <div class="flex items-center justify-between mt-6">
            <span class="text-xl font-semibold text-black dark:text-white bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg">
              Rp. {{ book.price }}
            </span>
          </div>

          <div class="mt-4">
            <label class="text-black dark:text-gray-200 text-sm">Quantity:</label>
            <select v-model="quantity" class="w-full text-black dark:text-white dark:bg-gray-800 p-3 rounded-lg border border-gray-700 mt-2">
              <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>

          <div class="flex gap-4 mt-6">
            <button v-if="book.stock > 0" @click="addToShop" class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center gap-2 w-full">
               Add to Cart
            </button>

            <button v-if="book.stock > 0" @click="buyNow" class="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg flex items-center gap-2 w-full">
               Buy Now
            </button>

            <p v-else class="text-red-500 font-semibold text-lg">
              Out of Stock
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useShopStore } from "@/stores/shopStore";
import { apiClient } from "@/config/axios";
import Swal from "sweetalert2";

const route = useRoute();
const router = useRouter();
const shopStore = useShopStore();
const book = ref({});
const quantity = ref(1);

const bookById = async () => {
  const { data } = await apiClient(`/book/${route.params.id}`);
  book.value = data.data;
};

onMounted(() => {
  bookById();

  const savedShop = localStorage.getItem("shop");
  if (savedShop) {
    shopStore.shop = JSON.parse(savedShop);
  }
});

watch(() => shopStore.shop, (newShop) => {
  localStorage.setItem("shop", JSON.stringify(newShop));
}, { deep: true });

const addToShop = () => {
  shopStore.addToShop({ ...book.value, quantity: quantity.value });


  Swal.fire({
    title: "Added to Cart!",
    text: `"${book.value.name}" has been added to your cart.`,
    icon: "success",
    timer: 2000,
    showConfirmButton: false
  });
};

const buyNow = () => {
  shopStore.shop = [{ ...book.value, quantity: quantity.value }];
  router.push({ name: "order" });
 Swal.fire({
    title: "buy product",
    text: `"${book.value.name}" product was proceed.`,
    icon: "success",
    timer: 2000,
    showConfirmButton: false
  });
  };
</script>
