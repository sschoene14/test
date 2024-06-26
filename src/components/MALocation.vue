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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.796896533684!2d-77.94660312418318!3d34.22820400841847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aa1fc6ec8970b7%3A0xddc1139853c6203e!2sFamily%20First%20Tattoo!5e0!3m2!1sen!2sus!4v1719432548787!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      </div>
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
          <div style="margin-top: 20px; font-size: 20px">
            315 Castle Street
          </div>
          <div style="font-size: 20px">Wilmington, NC 28401</div>
        </div>
        <div>
          <div style="color: #D87048; font-size: 25px;">CONTACT ME</div>
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.796896533684!2d-77.94660312418318!3d34.22820400841847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aa1fc6ec8970b7%3A0xddc1139853c6203e!2sFamily%20First%20Tattoo!5e0!3m2!1sen!2sus!4v1719432548787!5m2!1sen!2sus" width="100%" height="400" style="margin: auto; border:0;" allowfullscreen=
"" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
          <div style="margin-top: 0px; font-size: 20px">
            315 Castle Street
          </div>
          <div style="font-size: 20px">Wilmington, NC 28401</div>
        </div>
        <div>
          <div style="color: #D87048; font-size: 30px;">CONTACT ME</div>
          <div style="font-size: 20px;">meaghanangel8@gmail.com</div>
        </div>
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
