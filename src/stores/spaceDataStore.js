import { defineStore } from 'pinia';
import axios from 'axios';

const { VUE_URL, VUE_PATH } = import.meta.env;

const spaceStore = defineStore('space', {
  state: () => ({
    spaceData: [],
  }),
  actions: {
    getSpace() {
      const url = `${VUE_URL}api/${VUE_PATH}/space`;
      axios.get(url)
        .then((res) => {
          console.log(res.data.products);
        });
    },
  },
});

export default spaceStore;
