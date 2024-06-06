<template>
  <div class="col-lg-6">
    <h3 class="mb-3">預約表單</h3>
    <VForm ref="form" v-slot="{ errors }" @submit="createOrder">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <VField
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="form.user.email"
        />
        <ErrorMessage name="email" class="invalid-feedback" />
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">預約姓名</label>
        <VField
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名"
          rules="required"
          v-model="form.user.name"
        />
        <ErrorMessage name="姓名" class="invalid-feedback" />
      </div>
      <div class="mb-3">
        <label for="tel" class="form-label">預約電話</label>
        <VField
          id="tel"
          name="電話"
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': errors['電話'] }"
          placeholder="請輸入電話"
          rules="required|min:8|max:10|numeric"
          v-model="form.user.tel"
        />
        <ErrorMessage name="電話" class="invalid-feedback" />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">預約空間</label>
        <VField
          id="address"
          name="空間"
          class="form-select"
          as="select">
          <option disabled value="">請選擇</option>
          <option value="共享辦公空間">共享辦公空間</option>
          <option value="獨立辦公空間">獨立辦公空間</option>
          <option value="會議室空間">會議室空間</option>
        </VField>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea
          id="message"
          class="form-control"
          cols="30"
          rows="10"
          v-model="form.message"
        ></textarea>
      </div>
      <div
        class="d-flex mt-4 justify-content-between align-items-md-center align-items-end w-100"
      >
        <div class="text-end">
          <button type="submit" class="btn btn-dark" :disabled="isProcessing">
            送出訂單
          </button>
        </div>
      </div>
    </VForm>
  </div>
</template>

<script>
const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      isProcessing: false,
    };
  },
  methods: {
    createOrder() {
      this.isProcessing = true;
      const order = this.form;
      this.$http
        .post(`${VITE_API}/api/${VITE_PATH}/order`, { data: order })
        .then((res) => {
          const { orderId } = res.data;
          this.isProcessing = false;
          this.$refs.form.resetForm();
          this.$router.push(`/checkout/${orderId}`);
        })
        .catch(() => {
          this.isProcessing = false;
        });
    },
  },
};
</script>
