<script setup>
const props = defineProps(['foo'])
function sendToSquare() {
    this.showMenu = false;
  window.location.href="https://www.chachisbaltimore.com/s/order"
}
</script>

<template>
    <div style="margin-top: 30px;display:flex; flex-direction: column; justify-content: center; align-items: center;">
        <!-- <div style="font-size: 38px; font-weight: 300;">Sharing the courtyard with <span><img style="height: 45px; margin-left:10px;" src="/layout/images/chachis/FS_TRANS.png"></span></div> -->
        <div style="font-size: 38px; text-align: center; font-weight: 300;">CURRENTLY TATTOOING AT INK'D SAFE SPACE</div>
        <div style="color: #D87048; margin-top: 40px; font-size: 28px; font-weight: 300;">Tuesday-Sunday</div>
        <div style="padding: 10px; font-size: 24px; font-weight: 300;">12PM - 5PM</div>
    </div>
</template>

<style scoped>
</style>
