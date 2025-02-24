<template>
  <Header />
  <panel />
  <div class="w-full bg-white dark:bg-gray-900">

  <div class="mx-10   bg-white dark:bg-gray-900">
    <h1 class="text-2xl font-bold mb-6 text-black dark:text-white">You might like these</h1>
     <div class="w-3/4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="(item, idx) in localData"
        :key="idx"
        class="card dark:bg-gray-800 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300"
      >
        <router-link :to="{ name: 'book.show', params: { id: item.id } }">
          <div class="relative bg-gray-100 p-3 dark:bg-gray-700 flex justify-center items-center m-3 rounded-lg">
            <img
              :src="item.cover_image"
              alt="Book Cover"
              class="h-52 object-cover"
            />
            <span
              class="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded"
            >
              {{ item.stock > 0 ? "In Stock" : "Out of Stock" }}
            </span>
          </div>
          <div class="p-4 ">
            <h2 class="text-lg font-semibold truncate text-black dark:text-white">{{ item.name }}</h2>
            <p class="text-gray-700 font-semibold mt-2   dark:text-white">Rp {{ item.price }}</p>
          </div>
        </router-link>
      </div>
    </div>
    </div>
    <div class="mt-10 flex justify-center">
  <button
    v-if="paginate.next_page_url"
    @click="showProd"
    class="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110"
  >
    View More
  </button>

  <p v-else class="text-gray-500 dark:text-gray-400 text-lg font-semibold">
    No more books available
  </p>
</div>

  </div>
</div>
  <Review />
  <Feature />
  <Contact />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { apiClient } from "@/config/axios";
import panel from "../components/partials/panel.vue";
import Review from "../components/partials/Review.vue";
import Header from "../components/partials/Header.vue";
import Feature from "../components/partials/Feature.vue";
import Contact from "../components/partials/Contact.vue";

const localData = ref([]);
const paginate = ref({
  next_page_url: "/book?page=1", // Memulai dari halaman pertama
});

const showProd = async () => {
  if (!paginate.value.next_page_url) return;

  const { data } = await apiClient.get(paginate.value.next_page_url);

  // Hindari duplikasi data
  const newBooks = data.data.data.filter(
    (book) => !localData.value.some((b) => b.id === book.id)
  );

  localData.value.push(...newBooks);

  // Update pagination info
  paginate.value = {
    next_page_url: data.data.next_page_url,
  };
};

onMounted(() => {
  showProd();
});
</script>
