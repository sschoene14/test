<script setup>
const props = defineProps(['foo'])
function sendToSquare() {
    this.showMenu = false;
  window.location.href="https://www.chachisbaltimore.com/s/order"
}
</script>

<template>
    <div class="splash">
        <div  style="width: 80%; align-items: center; display: flex; flex-direction: column;">
            <div style="justify-content: center; text-align: center;">
                <h1>POP CULTURE CONNOISSEUR</h1>
                <h3>BALTIMORE, MD</h3>
            </div>
            <div>
                <!-- <a style="text-decoration: none; color: black;" href="mailto:meaghanangel8@gmail.com"><Button  style="margin-top: 20px; background-color: rgba(255, 136, 0, 0.591) !important;" label="REQUEST APPOINTMENT"></Button></a> -->
                <router-link
                style="text-decoration: none; color: black"
                to="/request"
                ><Button  style="margin-top: 20px; background-color: rgba(255, 136, 0, 0.591) !important;" label="REQUEST APPOINTMENT"></Button></router-link>
            </div>
            
        </div>

    </div>
</template>

<style scoped>
@media only screen and (max-width: 1100px) {
    .splash {
    background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/layout/images/website_assets/meaghan_splash_2.jpeg') !important;
    /* background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/layout/images/website_assets/masplash_test.png') !important; */
    /* background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/layout/images/website_assets/masplash_test2.png'); */
    /* background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/layout/images/website_assets/MASplash.png'); */
        
    }
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
.splash {
    margin-top:10px;
    /* background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/layout/images/website_assets/meaghan_splash_2.jpeg'); */
    background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/layout/images/website_assets/masplash_test.png');
    /* background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/layout/images/website_assets/masplash_test2.png'); */
    /* background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/layout/images/website_assets/MASplash.png'); */
    background-size: cover;
    
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white
}
.splashRegister {
    background-image: url('/layout/images/landing/landing-main.jpg');
    background-size: cover;
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white
}
</style>
