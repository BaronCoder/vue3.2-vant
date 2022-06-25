<template>
    <van-popup v-model:show="childPopupFlag"
        round
        position="bottom"
        :style="{ height: '30%' }"
        @click-overlay="closePopup">
        <div>
            子组件弹窗
        </div>
    </van-popup>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps({
    popupFlag: false,
});
let childPopupFlag = ref(false);
watch(childPopupFlag, (newCode, prevCode) => {
    console.log(newCode, "childPopupFlag newCode");
    console.log(prevCode, "childPopupFlag prevCode");
    emits("update:popupFlag", newCode);
});

watch(props, (newCode, prevCode) => {
    console.log(newCode, "props newCode");
    console.log(prevCode, "props prevCode");
    let { popupFlag } = props;
    childPopupFlag.value = popupFlag;
});
const emits = defineEmits(["update:popupFlag"])
const closePopup = () => {
    emits("update:popupFlag", false);
};
</script>
