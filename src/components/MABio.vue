<script>
import { ref, onMounted, watch } from "vue";
import { mapActions } from "vuex";
import { useStore } from "vuex";

export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="wrapper card flex justify-content-center">
      <div class="text">
        Originally from Maryland, Meaghan moved to North Carolina after graduating high school to pursue tattooing. Her style includes mash-ups of traditional tattoo designs and pop culture, and she enjoys doing anything colorful. In her spare time she enjoys hanging out with her Corgi Lum(pronounced Loom) and making custom tattoo flash in the aforementioned style.
      </div>
      <div class="photo">
        <img
          style="width: 300px; height: 300px; object-fit: cover;"
          src="/layout/images/website_assets/MASplash2.jpeg"
        />
      </div>
    </div>
  </div>
  <div class="wrapperMobile">
    
      <div class="photoMobile">
        <img
          style="width: 100%"
          src="/layout/images/website_assets/tattoo.png"
        />
      </div>

  </div>
</template>

<style scoped>
@media only screen and (max-width: 1160px) {
  .wrapperMobile {
    display: block !important;
    width: 100%;
    padding: 10px;
  }
  .textMobile {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  .photoMobile {
    width: 100%
  }
  .wrapper {
    display: none !important;
  }
}
.wrapperMobile {
  display: none ;
}

.header {
  padding: 20px;
}
.wrapper {
  width: 90%;
  align-items: center;
  margin: auto;
  display: block;
}
.text {
  width: 66%;
  /* height: 300px; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.photo {
  width: 33%;
  padding: 20px;
}
</style>
