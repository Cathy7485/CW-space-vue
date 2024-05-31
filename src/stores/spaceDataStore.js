import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_URL, VITE_PATH } = import.meta.env;

const spaceStore = defineStore('spaceStore', {
  state: () => ({
    spaceData: [],
  }),
  actions: {
    getSpace() {
      const url = `${VITE_URL}api/${VITE_PATH}/products/all`;
      axios.get(url)
        .then((res) => {
          this.spaceData = res.data.products;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },
});

export default spaceStore;
