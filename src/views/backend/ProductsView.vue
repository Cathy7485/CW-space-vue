<template>
  <div class="text-end">
    <button
      class="button primary"
      @click="openModal"
      >新增一個產品</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in productsData" :key="item.id">
        <td>{{  item.category  }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{  item.origin_price }}
        </td>
        <td class="text-right">
          {{ item.price }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm">編輯</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductModalVue ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"></ProductModalVue>
</template>

<script>
import ProductModalVue from '@/components/ProductModal.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      productsData: [],
      pagination: {},
      tempProduct: {},
    };
  },
  methods: {
    openModal() {
      this.tempProduct = {};
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      const api = `${VITE_URL}api/${VITE_PATH}/admin/product`;
      const productComponent = this.$refs.productModal;
      this.$http.post(api, { data: this.tempProduct }).then(
        () => {
          productComponent.hideModal();
          this.getProducts();
        },
      );
    },
    getProducts() {
      const api = `${VITE_URL}api/${VITE_PATH}/admin/products`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.productsData = res.data.products;
          }
        });
    },
  },
  components: {
    ProductModalVue,
  },
  created() {
    this.getProducts();
  },
};
</script>
