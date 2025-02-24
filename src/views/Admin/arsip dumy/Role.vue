<template>
  <div class="py-10"></div>
  <div>
    <!-- Header Section -->
    <div class="flex justify-between items-center mb-4">
      <!-- Left Section -->
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
        Data Role
      </h2>

      <!-- Right Section -->
      <div class="flex space-x-4">
        <!-- Search Bar -->
        <div class="relative">
          <label for="table-search" class="sr-only">Search</label>
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            class="block w-80 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for Roles"
          />
        </div>

        <!-- Add Button -->
        <button
          
          class="bg-gray-500 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded-md"
        >
          Tambah
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="p-4"></th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Role</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, index) in users"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="w-4 p-4"></td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                class="w-10 h-10 rounded-full"
                :src="user.image"
                :alt="user.name + ' image'"
              />
              <div class="pl-3">
                <div class="text-base font-semibold">{{ user.name }}</div>
              </div>
            </th>
            <td class="px-6 py-4">
              <div class="font-normal text-gray-500">{{ user.email }}</div>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">{{ user.role }}</div>
            </td>
            <td class="px-6 py-4">
              <button
                
                class="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-2 rounded-md"
              >
                Edit role
              </button>
              <button
                
                class="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-2 ml-2 rounded-md"
              >
                Delete role
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

   
    
  </div>
</template>

<script setup>
import { ref } from "vue";

const users = ref([
  {
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    name: "Neil Sims",
    email: "neil.sims@flowbite.com",
    role: "Admin",
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    name: "Bonnie gray",
    email: "bonnie@flowbite.com",
    role: "User",
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    name: "Jese Leos",
    email: "jese@flowbite.com",
    role: "User",
  },
]);

// const isEditModalOpen = ref(false);
// const isAddModalOpen = ref(false);

// const selectedUser = ref(null);
// const newRole = ref({ name: "", email: "", role: "" });

// function openEditModal(user) {
//   selectedUser.value = { ...user };
//   isEditModalOpen.value = true;
// }

// function saveRole() {
//   const index = users.value.findIndex(
//     (u) => u.email === selectedUser.value.email
//   );
//   if (index !== -1) {
//     users.value[index] = { ...selectedUser.value };
//   }
//   isEditModalOpen.value = false;
// }

// function addNewRole() {
//   if (newRole.value.name && newRole.value.email && newRole.value.role) {
//     users.value.push({ ...newRole.value, image });
//     newRole.value = { name: "", email: "", role: "" };
//     isAddModalOpen.value = false;
//   } else {
//     alert("Semua field harus diisi!");
//   }
// }
// //delete role
// function deleteRole(index) {
//   users.value.splice(index, 1);
// }
</script>
