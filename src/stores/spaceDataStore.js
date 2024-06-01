import { defineStore } from 'pinia';
import axios from 'axios';
import statusStore from './statusStore';

const status = statusStore();
const { VITE_URL, VITE_PATH } = import.meta.env;

const spaceStore = defineStore('spaceStore', {
  state: () => ({
    spaceData: [],
  }),
  actions: {
    getSpace() {
      const url = `${VITE_URL}api/${VITE_PATH}/products/all`;
      status.fullPage = false;
      status.isLoading = true;
      axios.get(url)
        .then((res) => {
          status.isLoading = false;
          this.spaceData = res.data.products;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },
});

export default spaceStore;
