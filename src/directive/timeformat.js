// eslint-disable-next-line import/no-extraneous-dependencies
import dayjs from 'dayjs';

export const timeformat = {
  mounted(el, binding) {
    // eslint-disable-next-line no-param-reassign
    el.innerHTML = dayjs.unix(binding.value).format('YYYY/MM/DD');
  },
};

export default timeformat;
