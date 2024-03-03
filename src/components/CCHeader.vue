<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const isActive = ref(false);
const showMenu = ref(false);
const props = defineProps(["foo"]);

const router = useRouter();
function scrollTo(val) {
  this.showMenu = false;
  if (props.foo == "landing") document.getElementById(val).scrollIntoView();
  else {
    this.pushToLanding();
  }
}
function pushToRegister() {
  this.showMenu = false;
  router.push({
    name: "register",
  });
}
function pushToLanding() {
  this.showMenu = false;
  router.push({
    name: "landing",
  });
}
function sendToLogin() {
    this.showMenu = false;
  router.push({
    name: "login",
  });
}
</script>

<template>
  <div class="wrapper">
    <div class="logo">
      <div style="width: 25%;"></div>
      <div>
        <img
          @click="pushToLanding()"
          style="cursor: pointer; display: block; margin-left: auto; margin-right: auto; width: 35%; padding: 10px"
          src="/layout/images/chachis/ChachisLogo-StephKari_bluegreen_1657396547.webp"
        />
      </div>
      <div
        style="
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 25%;
        "
      >
        <div @click="pushToRegister()" class="signUp">Sign Up</div>
        <i
          @click="sendToLogin()"
          style="padding: 20px"
          class="menu pi pi-user"
        ></i>
      </div>
    </div>
    <div class="nav">
      <div style="width: 25%;"></div>
      <div>
        <div style="display: flex">
          <ul style="list-style: none; margin-left: 0">
            <li class="sectionTitle">
              <a
                @click="scrollTo('subscription')"
                style="text-decoration: none; color: inherit"
                >ABOUT</a
              >
            </li>
            <li class="sectionTitle">
              <a
                @click="scrollTo('updates')"
                style="text-decoration: none; color: inherit"
                >MENU</a
              >
            </li>
            <li class="sectionTitle">
              <a
                @click="scrollTo('dyk')"
                style="text-decoration: none; color: inherit"
                >CATERING</a
              >
            </li>
            <li class="sectionTitle">
              <a
                @click="scrollTo('dyk')"
                style="text-decoration: none; color: inherit"
                >ORDER ONLINE</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div
        style="
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 25%;
        "
      ></div>
    </div>
  </div>
  
  <div class="wrapperMobile">
    <div>
      <img
        style="width: 120px; padding: 10px"
        src="/layout/images/metaihemp_nobackground_title.png"
      />
    </div>
    <div>
      <div class="card flex justify-content-center">
        <Sidebar
          class="mobileMenu"
          v-model:visible="showMenu"
          header="Sidebar"
          position="right"
        >
          <div
            style="border-bottom: 2px solid rgba(0, 0, 0, 0.218); padding: 10px"
          >
            <div class="mobileMenu-item" @click="pushToLanding()">Home</div>
            <div class="mobileMenu-item" @click="sendToLogin()">My Account</div>
          </div>
          <div
            style="border-bottom: 2px solid rgba(0, 0, 0, 0.218); padding: 10px"
          >
            <div class="mobileMenu-item" @click="scrollTo('subscription')">
              Subscription
            </div>
            <div class="mobileMenu-item" @click="scrollTo('updates')">
              Latest Updates
            </div>
            <div class="mobileMenu-item" @click="scrollTo('dyk')">
              Did You Know?
            </div>
          </div>

          <div class="mobileMenu-item" @click="pushToRegister()">Sign Up</div>
          <div class="mobileMenu-footer">
            <div></div>
            <div></div>
          </div>
        </Sidebar>
        <i @click="showMenu = !showMenu" class="pi pi-bars"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 750px) {
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
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  align-items: center;
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
  padding: 20px 20px 0 20px;
}

.sectionTitle:hover {
  cursor: pointer;
  border-bottom: 2px solid #72727268;
  padding-bottom: 3px;
}
.wrapper {
  display: flex;
  flex-direction: column;
}

.menu:hover {
  cursor: pointer;
  border-radius: 20px;
  background-color: rgba(189, 189, 189, 0.415);
}
</style>
