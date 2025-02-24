import { defineStore } from "pinia";

export const useShopStore = defineStore("shop", {
  state: () => ({
    shop: JSON.parse(localStorage.getItem("shop")) || [],
  }),
  actions: {
    addToShop(book) {
      const existingBook = this.shop.find((item) => item.id === book.id);
      if (existingBook) {
        existingBook.quantity++;
      } else {
        this.shop.push({ ...book, quantity: 1 });
      }
      this.saveToLocalStorage();
    },

    removeFromShop(bookId) {
      this.shop = this.shop.filter((book) => book.id !== bookId);
      this.saveToLocalStorage();
    },

    updateQuantity(bookId, newQuantity) {
      const book = this.shop.find((item) => item.id === bookId);
      if (book && newQuantity > 0) {
        book.quantity = newQuantity;
        this.saveToLocalStorage();
      }
    },

    clearShop() {
      this.shop = [];
      this.saveToLocalStorage();
    },

    saveToLocalStorage() {
      localStorage.setItem("shop", JSON.stringify(this.shop));
    },
  },
});
