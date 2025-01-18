import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import axios from 'axios';

const { VITE_DATA_URL } = import.meta.env;

export const useAdminStore = defineStore('adminStore', () => {
  const router = useRouter();

  const userName = ref('管理員');
  const user = ref({
    email: '',
    password: '',
  });

  const signin = async () => {
    const api = `${VITE_DATA_URL}/login`;
    try {
      await axios
        .post(api, user.value)
        .then((res) => {
          const token = res.data.accessToken;
          userName.value = res.data.user.username;
          // set cookie expirations to 1 hour
          document.cookie = `spaceToken=${token};max-age=3600;`;
          router.push('/dashboard');
        });
    } catch (error) {
      console.error('帳號或密碼錯誤');
      alert('帳號或密碼錯誤');
    }
  };

  return {
    signin,
    user,
    userName,
  };
});

export default useAdminStore;
