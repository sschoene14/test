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
    <div class="header card flex justify-content-center">
      <h1 style="text-align: center">TATTOOING ON DARKER SKIN TONES</h1>
    </div>
    <div class="wrapper card flex justify-content-center">
      <div class="text">
        <div style="font-size: larger">
          <div>Lets get one thing clear right off the bat...</div>
          <div style="font-weight: bold">
            People with melanated skin absolutely can get color tattoos!
          </div>
        </div>

        <div style="margin-top: 10px">
          It is a common misconception that people with darker skin cannot get
          color tattoos, and that color tattoos on darker skin cannot look good
          no matter what. This information could not be farther from the truth,
          and actually stems from racism and anti-blackness that has been
          prevalant in the tattooing industry for many years.
        </div>
        <div>
          My hope with this page is to provide access to the information that I
          have learned about tattooing melanated skin so that other tattooers
          can use this as a resource, and so that people with darker skin tones
          know that they most certainly can get color tattoos.
        </div>
      </div>
      <div class="photo">
        <img
          style="width: 100%"
          src="/layout/images/website_assets/image9.png"
        />
      </div>
    </div>
  </div>
  <div class="wrapperMobile">
    <div class="header card flex justify-content-center">
      <h1 style="text-align: center">TATTOOING ON DARKER SKIN TONES</h1>
    </div>
    <div style="flex-direction: column;" class="card flex justify-content-center">
      <div class="textMobile">
        <div style="font-size: large">
          <div>Lets get one thing clear right off the bat...</div>
          <div style="font-weight: bold">
            People with melanated skin absolutely can get color tattoos that
            look good!
          </div>
        </div>

        <div style="margin-top: 10px">
          It is a common misconception that people with darker skin cannot get
          color tattoos, and that color tattoos on darker skin cannot look good
          no matter what. This information could not be farther from the truth,
          and actually stems from racism and anti-blackness that has been
          prevalant in the tattooing industry for many years.
        </div>
        <div>
          My hope with this page is to provide access to the information that I
          have learned about tattooing melanated skin so that other tattooers
          can use this as a resource, and so that people with darker skin tones
          know that they most certainly can get color tattoos.
        </div>
      </div>
      <div class="photoMobile">
        <img
          style="width: 100%"
          src="/layout/images/website_assets/image9.png"
        />
      </div>
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
