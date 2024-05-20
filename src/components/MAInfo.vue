<script setup>
const props = defineProps(["foo"]);
</script>

<template>
  <div class="wrapper">
    <!-- <div style="font-size: 38px; font-weight: 300;">Sharing the courtyard with <span><img style="height: 45px; margin-left:10px;" src="/layout/images/chachis/FS_TRANS.png"></span></div> -->
    <div style="font-size: 38px; text-align: center; font-weight: 300">
      CURRENTLY TATTOOING AT INK'D SAFE SPACE
    </div>
    <div
      style="
        color: #d87048;
        margin-top: 40px;
        font-size: 28px;
        font-weight: 300;
      "
    >
      Wednesday-Sunday
    </div>
    <div
      style="
        margin-bottom: 30px;
        padding: 10px;
        font-size: 24px;
        font-weight: 300;
      "
    >
      12PM - 7PM
    </div>
  </div>
  <div class="mobileWrapper">
    <!-- <div style="font-size: 38px; font-weight: 300;">Sharing the courtyard with <span><img style="height: 45px; margin-left:10px;" src="/layout/images/chachis/FS_TRANS.png"></span></div> -->
    <div style="font-size: 38px; text-align: center; font-weight: 300">
      CURRENTLY TATTOOING AT INK'D SAFE SPACE
    </div>
    <div
      style="
        color: #d87048;
        margin-top: 40px;
        font-size: 28px;
        font-weight: 300;
      "
    >
      Wednesday-Sunday
    </div>
    <div
      style="
        margin-bottom: 30px;
        padding: 10px;
        font-size: 24px;
        font-weight: 300;
      "
    >
      12PM - 7PM
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 550px) {
  .mobileWrapper {
    width: 100%;
    margin: auto;
    margin-top: 30px;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid rgba(216 112, 72, 0.5);
  }
  .wrapper {
    display: none !important;
  }
}
.wrapper {
  width: 80%;
  margin: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid rgba(216 112, 72, 0.5);
}
.mobileWrapper {
  display: none;
}
</style>
