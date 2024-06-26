<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const isActive = ref(false);
const showMenu = ref(false);
const props = defineProps(["foo"]);

const router = useRouter();

function pushToMenu() {
  this.showMenu = false;
  router.push({
    name: "menu",
  });
}
function pushToLanding() {
  this.showMenu = false;
  router.push({
    name: "landing",
  });
}
</script>

<template>
  <div class="wrapper">
    <div class="logo">
      <div>
        <router-link style="text-decoration: none" to="/">
          <!-- <div style="font-size: 32px; color: black">MEAGHAN ANGEL TATTOOS</div> -->
          <img
            @click="pushToLanding()"
            style="
              cursor: pointer;
              display: block;
              margin-left: auto;
              margin-right: auto;
              width: 200px;
              padding: 10px;
            "
            src="/layout/images/website_assets/logo.png"
          />
        </router-link>
      </div>
    </div>
    <div class="nav">
      <div style="margin-left: 0">
        <!-- <div class="sectionTitle">
          <router-link style="text-decoration: none; color: black" to="/"
            >HOME</router-link
          >
        </div> -->
        <div class="sectionTitle">
          <router-link
            style="text-decoration: none; color: black"
            to="/portfolio"
            >PORTFOLIO</router-link
          >
        </div>
        <div class="sectionTitle">
          <router-link style="text-decoration: none; color: black" to="/flash"
            >FLASH SHEETS</router-link
          >
        </div>
        <div class="sectionTitle">
          <router-link
            style="text-decoration: none; color: black"
            to="/melanated"
            >MELANATED SKIN</router-link
          >
        </div>
        <div class="sectionAction">
          <a
            style="text-decoration: none; color: black"
            href="mailto:meaghanangel8@gmail.com"
            ><span
              class="sectionActionText"
              style="outline: solid black 1px; padding: 10px"
              >APPOINTMENT REQUEST</span
            ></a
          >
        </div>
      </div>
    </div>
  </div>

  <div class="wrapperMobile">
    <div>
      <router-link style="text-decoration: none" to="/">

      <img
        style="width: 140px; padding: 10px"
        src="/layout/images/website_assets/logo.png"
      />
      </router-link>
    </div>
    <div style="width: 10%">
      <div class="card flex justify-content-center">
        <Sidebar
          class="mobileMenu"
          v-model:visible="showMenu"
          header=" "
          position="right"
        >
          <div
            style="
              border-bottom: 2px solid rgba(0, 0, 0, 0.218);
              padding: 10px;
              border-top: 2px solid rgba(0, 0, 0, 0.218);
              padding: 10px;
            "
          >
            <div class="mobileMenu-item">
              <router-link style="text-decoration: none; color: black" to="/"
                >ABOUT</router-link
              >
            </div>
            <div class="mobileMenu-item">
              <router-link
                style="text-decoration: none; color: black"
                to="/portfolio"
                >PORTFOLIO</router-link
              >
            </div>
            <div class="mobileMenu-item">
              <router-link
                style="text-decoration: none; color: black"
                to="/flash"
                >FLASH</router-link
              >
            </div>
            <div class="mobileMenu-item">
              <router-link
                style="text-decoration: none; color: black"
                to="/melanated"
                >MELANATED SKIN</router-link
              >
            </div>
            <div class="mobileMenu-item">
              <a
                style="text-decoration: none; color: black"
                href="mailto:meaghanangel8@gmail.com"
                ><span
                  class="sectionActionText"
                  >APPOINTMENT REQUEST</span
                ></a
              >
            </div>
          </div>
        </Sidebar>
        <i @click="showMenu = !showMenu" class="pi pi-bars"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 1310px) {
  .wrapperMobile {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-right: 30px;
  }
  .wrapper {
    display: none !important;
  }
}
.logo {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.nav {
  display: flex !important;
  width: 100%;
  justify-content: right;
  align-content: center;
  align-items: center;
  font-size: small;
}
.pi-bars:hover {
  cursor: pointer;
}
.mobileMenu {
  background-color: rgba(255, 255, 255, 0.5) !important;
}
.mobileMenu-item {
  text-align: center;
  font-size: 30px;
  padding: 12px;
}
.mobileMenu-item:hover {
  cursor: pointer;
  color: rgb(126, 155, 126);
}
.wrapperMobile {
  display: none;
}
.signUp {
  padding: 5px;
}
.signUp:hover {
  cursor: pointer;
  border-bottom: 2px solid #72727268;
  padding-bottom: 3px;
}
.sectionTitle {
  display: inline;
  padding: 20px;
}
.sectionAction {
  display: inline;
  padding: 20px;
}
.sectionAction:hover {
  cursor: pointer;
}
.sectionActionText:hover {
  background-color: rgba(255, 136, 0, 0.591);
}
.sectionTitle:hover {
  cursor: pointer;
  border-bottom: 2px solid #72727268;
  padding-bottom: 3px;
}
.wrapper {
  display: flex;
  padding: 10px;
  /* flex-direction: column; */
}

.menu:hover {
  cursor: pointer;
  border-radius: 20px;
  background-color: rgba(189, 189, 189, 0.415);
}
</style>
