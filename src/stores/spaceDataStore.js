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
      status.isLoading = true;
      axios
        .get(url)
        .then((res) => {
          status.isLoading = false;
          this.thisSpace = res.data.product;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
    spaceTitleClass() {
      let target;
      this.spaceList.forEach((element) => {
        target = element;
        if (element.title === this.thisSpace.title) {
          target.isActive = true;
        } else {
          target.isActive = false;
        }
      });
    },
  },
});

export default spaceStore;
