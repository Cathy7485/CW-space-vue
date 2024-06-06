import { defineStore } from 'pinia';
import axios from 'axios';
import statusStore from './statusStore';

const status = statusStore();
const { VITE_URL, VITE_PATH } = import.meta.env;

const spaceStore = defineStore('spaceStore', {
  state: () => ({
    spaceList: [],
    thisSpace: [],
  }),
  actions: {
    getSpaceList() {
      const url = `${VITE_URL}api/${VITE_PATH}/products/all`;
      status.fullPage = false;
      status.isLoading = true;
      axios
        .get(url)
        .then((res) => {
          status.isLoading = false;
          this.spaceList = res.data.products;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
    getSpace(id) {
      const url = `${VITE_URL}api/${VITE_PATH}/product/${id}`;
      axios
        .get(url)
        .then((res) => {
          this.thisSpace = res.data.product;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },
});

export default spaceStore;
