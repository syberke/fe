<template>
  <section class="bg-gray-100 dark:bg-gray-900 py-8 antialiased md:py-16">
    <form
      action="#"
      class="mx-auto max-w-screen-xl px-4 2xl:px-0"
      @submit.prevent="handleOrder"
    >
      <ol
        class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-black-500 sm:text-base"
      >
        <li
          class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
        >
          <span
            class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden"
          >
            <svg
              class="me-2 h-4 w-4 sm:h-5 sm:w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Cart
          </span>
        </li>

        <li
          class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
        >
          <span
            class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-black-500 sm:after:hidden"
          >
            <svg
              class="me-2 h-4 w-4 sm:h-5 sm:w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Checkout
          </span>
        </li>

        <li class="flex shrink-0 items-center">
          <svg
            class="me-2 h-4 w-4 sm:h-5 sm:w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Order summary
        </li>
      </ol>

      <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
        <div class="min-w-0 flex-1 space-y-8">
          <div class="space-y-4">
            <h2 class="text-xl font-semibold text-black-900">
              Delivery Details
            </h2>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="mb-2 block text-sm font-medium text-black-900"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black-900 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Jhon"
                  v-model="form.first_name"
                  required
                />
              </div>

              <div>
                <label
                  for="last_name"
                  class="mb-2 block text-sm font-medium text-black-900"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black-900 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Doe"
                  v-model="form.last_name"
                  required
                />
              </div>
              <div>
                <label
                  for="your_email"
                  class="mb-2 block text-sm font-medium text-black-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="your_email"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black-900 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="ueser@mail.com"
                  v-model="form.email"
                  required
                />
              </div>
              <div>
                <label
                  for="address"
                  class="mb-2 block text-sm font-medium text-black-900"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black-900 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="jakarta"
                  v-model="form.address"
                  required
                />
              </div>

              <div>
                <div class="mb-2 flex items-center gap-2"></div>
              </div>

              <div>
                <div class="mb-2 flex items-center gap-2"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md"
        >
          <div class="flow-root">
            <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
              <dl class="flex items-center justify-between gap-4 py-3">
                <dt class="text-base font-normal text-black-500">Subtotal</dt>
                <dd class="text-base font-medium text-black-900">
                  x{{ route.query?.quantity }} -
                  {{ priceFormat(itemsBook?.price) }}
                </dd>
              </dl>

              <dl class="flex items-center justify-between gap-4 py-3">
                <dt class="text-base font-bold text-black-900">Total</dt>
                <dd class="text-base font-bold text-black-900">
                  {{ priceFormat(totalPrice) }}
                </dd>
              </dl>
            </div>
          </div>

          <div class="space-y-3">
            <button
              type="submit"
              class="flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-primary-300"
              @click="orderItem(item)"
            >
              Proceed to Payment
            </button>

            <p class="text-sm font-normal text-black-500">
              One or more items in your cart require an account.
              <a
                href="#"
                title=""
                class="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >Sign in or create an account now.</a
              >.
            </p>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { computed, onBeforeMount, reactive, ref } from "vue";
import { apiClient } from "@/config/axios";
import axios from "axios";
import { tokenUser } from "@/stores/tokenStorage";
import { useRoute } from "vue-router";

const route = useRoute();
const itemsBook = ref(null);
const form = reactive({
  first_name: "",
  last_name: "",
  email: "",
  address: "",
  idBook: route.query?.book_id,
  quantity: route.query?.quantity,
});
const totalPrice = computed(() => {
  return itemsBook.value?.price * route.query?.quantity;
});

onBeforeMount(async () => {
  await fetchBook();
});

// const itemsBook = async() => {
//   const data  = await apiClient.get("/book");
//     console.log(data.data);
// };
const fetchBook = async () => {
  const { data } = await apiClient.get(`/book/${route.query?.book_id}`);
  //   console.log(data);
  // conso;
  itemsBook.value = data.data;
};

const token = localStorage.getItem("token");

const orderItem = async (data) => {
  //   console.log(data);
  try {
    const response = await apiClient.post("/pay", form, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenUser.value}`,
      },
    });
    const newData = response.data;
    const snapToken = newData.snap_token;
    const orderParams = newData.order.id;
    console.log(response);
    console.log(orderParams);
    console.log(snapToken);
    console.log(apiClient);

    if (snapToken) {
      console.log(data);
      window.snap.pay(snapToken, {
        onSuccess: function (result) {
          axios.post(
            `https://book-store-backend-production-9682.up.railway.app/api/v1/order/${orderParams}?_method=PUT`,
            {
              status: "SUCCESS",
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenUser.value}`,
              },
            }
          );
          alert("payment success!");
          console.log(result);
        },
        onPending: function (result) {
          alert("wating your payment!");
          console.log(result);
        },
        onError: function (result) {
          axios.post(
            `https://book-store-backend-production-9682.up.railway.app/api/v1/order/${orderParams}?_method=DELETE`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          alert("payment failed!");
          console.log(result);
        },
        onClose: function (result) {
          axios.post(
            `https://book-store-backend-production-9682.up.railway.app/api/v1/order/${orderParams}?_method=DELETE`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          alert("you closed the popup without finishing the payment");
        },
      });
    }
  } catch (error) {
    //   else {
    // alert("transaksi gagal")
    // }
  }
};

const priceFormat = (price) => {
  const rupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
  return rupiah;
};
</script>
