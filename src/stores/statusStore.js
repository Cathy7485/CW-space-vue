import { defineStore } from 'pinia';

export default defineStore('statusStore', {
  state: () => ({
    fullPage: false,
    isLoading: false,
  }),
});
