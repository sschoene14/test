<script setup>
const props = defineProps(["foo"]);
function sendToSquare() {
  this.showMenu = false;
  window.location.href = "https://www.chachisbaltimore.com/s/order";
}
</script>

<template>
  <div
    class="wrapper"
  >
    <div style="display: flex; justify-content: space-evenly;">
      <div>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1D0oTXeb_DVl1HLCcxZs16Z2fIS4qY6A&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>      </div>
      <div
        style="
        height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        "
      >
        <div style="color: #D87048; font-size: 40px">LOCATION</div>
        <div>
          <div style="margin-top: 20px; font-size: 24px; font-weight: bold;">Ripp'd Canvas</div>

          <div style="margin-top: 20px; font-size: 20px">
            783 Washington Blvd
          </div>
          <div style="font-size: 20px">Baltimore, MD 21230</div>
        </div>
        <div>
          <div style="margin-top: 20px; font-size: 24px; font-weight: bold;">Waverly Tattoo Company</div>

          <div style="margin-top: 20px; font-size: 20px">
            203 W 28th Street
          </div>
          <div style="font-size: 20px">Baltimore, MD 21211</div>
        </div>
        <div>
          <div style="color: #D87048; font-size: 25px;margin-top: 20px;">CONTACT ME</div>
          <div style="font-size: 20px;">meaghanangel8@gmail.com</div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="wrapperMobile"
  >
    <div style="display: flex; flex-direction: column; justify-content: space-evenly;">
      <div>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1D0oTXeb_DVl1HLCcxZs16Z2fIS4qY6A&ehbc=2E312F&noprof=1" width="100%" height="480"></iframe>
-      </div>
      <div
        style="
        height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          text-align: center;
        "
      >
      <div style="color: #D87048; font-size: 40px">LOCATION</div>
        <div>
          <div style="margin-top: 20px; font-size: 24px; font-weight: bold;">Ripp'd Canvas</div>

          <div style="margin-top: 20px; font-size: 20px">
            783 Washington Blvd
          </div>
          <div style="font-size: 20px">Baltimore, MD 21230</div>
        </div>
        <div>
          <div style="margin-top: 20px; font-size: 24px; font-weight: bold;">Waverly Tattoo Company</div>

          <div style="margin-top: 20px; font-size: 20px">
            203 W 28th Street
          </div>
          <div style="font-size: 20px">Baltimore, MD 21211</div>
        </div>
          <div style="color: #D87048; font-size: 30px; margin-top: 20px;">CONTACT ME</div>
          <div style="font-size: 20px;">meaghanangel8@gmail.com</div>
        </div>
      </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 1160px) {
  .wrapperMobile {
    display: block !important;
    margin-top: 50px;
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      padding: 20px;
      border-top: 3px solid rgba(216 112, 72, .5);
  }
  .wrapper {
    display: none !important;
  }
}
.wrapper {
  margin-top: 10px;
      width: 80%;
      margin-right: auto;
      margin-left: auto;
      padding: 20px;
      border-top: 3px solid rgba(216 112, 72, .5);
}
.wrapperMobile {
  display: none;
}
.description {
  text-align: center;
  font-weight: 200px;
}
h1 {
  font-weight: 300;
  text-align: center;
}
h2 {
  font-weight: 200;
  text-align: center;
}
</style>
