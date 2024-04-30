<script>
import { ref, onMounted, watch } from "vue";
import { mapActions } from "vuex";
import { useStore } from "vuex";

export default {
  setup() {
    return 0;
  },
};
</script>

<template>
  <div class="header card flex justify-content-center">
    <h1>TATTOOING ON DARKER SKIN TONES</h1>
  </div>
<div class="wrapper card flex justify-content-center">
    <div class="text">
      <div style="font-size: large;">
        <div>Lets get one thing clear right off the bat...</div>
      <div style="font-weight: bold;">People with melanated skin absolutely can get color tattoos that look good!</div>
      </div>
      
      <div style="margin-top:10px;">It is a common misconception that people with darker skin cannot get color tattoos, and that color tattoos on darker skin cannot look good no matter what.
        This information could not be farther from the truth, and actually stems from racism and anti-blackness that has been prevalant in the tattooing industry for many years.</div>
        <div>My hope with this page is to provide access to the information that I have learned about tattooing melanated skin so that other tattooers can use this as a resource, and so that people with darker skin tones know that they most certainly can get color tattoos.</div>
    </div>
    <div class="photo">
      <img style="width: 100%" src="/layout/images/website_assets/image9.png"/>
    </div>
</div>
</template>

<style scoped>
.header {
  padding: 20px;
}
.wrapper {
    width: 80%;
    align-items: center;
    margin: auto;
}
.text {
    width: 66%;
    height: 300px;
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.photo {
    width: 33%;
    padding:20px;

}
</style>
