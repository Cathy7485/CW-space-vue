<script setup>
import { storeToRefs } from 'pinia';
import { useSpaceStore } from '@/stores/spaceStore';
import { useReserveStore } from '@/stores/reserveStore';

const reserveStore = useReserveStore();
const { picked, reserveData, isFilledIn } = storeToRefs(reserveStore);
const { backStep, checkedForm } = reserveStore;

const spaceStore = useSpaceStore();
const { pickedType } = storeToRefs(spaceStore);
</script>

<template>
  <fieldset>
    <dl class="row align-items-center">
      <dt class="form-title col-md-2">
        <label>
          目前選擇
        </label>
      </dt>
      <dd class="form-info col-md-10 mb-0">
        {{ picked }}
      </dd>
    </dl>
    <dl class="row align-items-center">
      <dt class="form-title col-md-2">
        <label for="reserve-plan">預約方案<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="form-info col-md-10 mb-0">
        <select name="reserve-plan" v-model="reserveData.plan" id="reserve-plan">
          <option value="" selected disabled>請選擇</option>
          <template v-if="picked === '共享辦公空間'">
            <option value="day">日租</option>
            <option value="month">月租</option>
          </template>
          <template v-if="picked === '獨立辦公空間'">
            <option value="month">月租</option>
          </template>
          <template v-if="picked === '會議室空間'">
            <option value="day">小時</option>
          </template>
        </select>
      </dd>
    </dl>
    <dl class="row align-items-center">
      <dt class="form-title col-md-2">
        <label for="date-picker">預約日期<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="form-info col-md-10 mb-0">
        <DatePicker
          id="date-picker"
          class="date-picker"
          format="YYYY-MM-DD"
          type="date"
          value-type="timestamp"
          v-model:value="reserveData.appointment"
          placeholder="請選擇日期" />
      </dd>
    </dl>
    <dl class="row align-items-center">
      <dt class="form-title col-md-2">
        <label for="time">預約時段<span class="text-danger ms-2">*</span></label>
      </dt>
      <dd class="form-info col-md-10 mb-0">
        <select name="time" id="time" v-model="reserveData.time">
          <template v-if="picked !== '會議室空間'">
            <option disabled value="">請選擇時段</option>
            <option value="08:00-18:00">08:00-18:00</option>
          </template>
          <template v-else>
            <option disabled value="">請選擇時段</option>
            <option value="09:00-11:00">09:00-11:00</option>
            <option value="11:00-13:00">11:00-13:00</option>
            <option value="13:00-15:00">13:00-15:00</option>
            <option value="15:00-17:00">15:00-17:00</option>
          </template>
        </select>
      </dd>
    </dl>
    <dl class="row align-items-center">
      <dt class="form-title col-md-2">
        <label for="seat">
          <span v-if="picked === '共享辦公空間'">座位選擇</span>
          <span v-else>空間選擇</span>
          <span class="text-danger ms-2">*</span>
        </label>
      </dt>
      <dd class="form-info col-md-10 mb-0">
        <select name="seat" id="seat" v-model="reserveData.kind">
          <option disabled value="">請選擇</option>
          <option
            v-for="item in pickedType"
            :key="item"
            :value="item.sort"
          >{{ item.sort }}</option>
        </select>
      </dd>
    </dl>
  </fieldset>
  <div class="btn-block">
    <button type="button" @click="backStep" class="button" title="上一步">上一步</button>
    <button
      type="button"
      :class="['button primary', { disabled : !isFilledIn }]"
      title="下一步"
      @click="checkedForm"
    >下一步</button>
  </div>
</template>
