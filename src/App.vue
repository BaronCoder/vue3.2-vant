<script setup>
import { ref } from 'vue';
import testPopupVue from './components/testPopup.vue';
let popupFlag = ref(false);
const clickBtn = () => {
  popupFlag.value = true;
}
</script>

<template>
  <van-button type="primary"
    @click="clickBtn">主要按钮</van-button>
  <!-- <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button> -->
  <test-popup-vue v-model:popup-flag="popupFlag"></test-popup-vue>
</template>

<style scoped>
</style>
