<template>
  <div class="mt-20 mx-10 mb-40 dark:text-gray-500">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold">Your Shop</h1>
      <router-link :to="{ name: 'book' }" class="link">Continue Shopping</router-link>
    </div>

    <div class="mt-14">
      <div class="relative overflow-x-auto max-h-[500px]">
        <table class="w-full text-md text-left text-black dark:text-gray-400">
          <thead class="text-sm uppercase dark:bg-gray-700 bg-gray-300 dark:text-white sticky top-0 z-10">
            <tr>
              <th class="px-6 py-4 w-1/2">Book Name</th>
              <th class="px-6 py-4 w-1/4">Quantity</th>
              <th class="px-6 py-4 w-1/4">Total</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="book in shopStore.shop" :key="book.id" class="border-b border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
              <td class="px-6 py-4 font-medium">
                <div class="flex items-center space-x-4">
                  <img :src="book.cover_image" alt="Book" class="w-24 h-32 rounded-md" />
                  <div>
                    <h2 class="text-lg font-semibold text-black dark:text-white">{{ book.name }}</h2>
                    <p class="text-gray-600 dark:text-gray-400">{{ book.author }}</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <button @click="shopStore.updateQuantity(book.id, book.quantity - 1)" class="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded">-</button>
                  <span class="text-lg">{{ book.quantity }}</span>
                  <button @click="shopStore.updateQuantity(book.id, book.quantity + 1)" class="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded">+</button>
                  <button @click="confirmRemove(book.id)" class="text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <g fill="none">
                        <path fill="currentColor" fill-rule="evenodd" d="M21 6H3v3a2 2 0 0 1 2 2v4c0 2.828 0 4.243.879 5.121C6.757 21 8.172 21 11 21h2c2.829 0 4.243 0 5.121-.879c.88-.878.88-2.293.88-5.121v-4a2 2 0 0 1 2-2zm-10.5 5a1 1 0 0 0-2 0v5a1 1 0 1 0 2 0zm5 0a1 1 0 0 0-2 0v5a1 1 0 1 0 2 0z" clip-rule="evenodd"/>
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10.068 3.37c.114-.106.365-.2.715-.267A6.7 6.7 0 0 1 12 3c.44 0 .868.036 1.217.103s.6.161.715.268"/>
                      </g>
                    </svg>
                  </button>
                </div>
              </td>
              <td class="px-6 py-4 text-lg">Rp. {{ book.price * book.quantity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="flex justify-between items-center mt-8 border-t pt-4">
      <h2 class="text-2xl font-semibold">Total: Rp. {{ totalPrice }}</h2>
      <button @click="confirmPay" class="px-5 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition">
        Pay Now
      </button>
    </div>
  </div>
</template>

<script setup>
import { useShopStore } from "@/stores/shopStore";
import Swal from "sweetalert2";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const shopStore = useShopStore();
const route = useRoute();
const router = useRouter();

const totalPrice = computed(() => {
  return shopStore.shop.reduce((total, book) => total + book.price * book.quantity, 0);
});

const confirmRemove = (bookId) => {
  Swal.fire({
    title: "Are you sure?",
    text: "This book will be removed from your cart.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, remove it!",
  }).then((result) => {
    if (result.isConfirmed) {
      shopStore.removeFromShop(bookId);
      Swal.fire("Deleted!", "The book has been removed.", "success");
    }
  });
};

const confirmPay = () => {
  if (shopStore.shop.length === 0) {
    Swal.fire("Oops!", "Your cart is empty!", "error");
    return;
  }

  Swal.fire({
    title: "Confirm Payment",
    text: `Total: Rp. ${totalPrice.value}`,
    icon: "info",
    showCancelButton: true,
    confirmButtonColor: "#4CAF50",
    cancelButtonColor: "#d33",
    confirmButtonText: "Pay Now",
  }).then((result) => {
    if (result.isConfirmed) {
      shopStore.clearShop(); 
      router.push({ name: "order" }); 
      Swal.fire("Success!", "Your product was proceed.", "success");
    }
  });
};
</script>
