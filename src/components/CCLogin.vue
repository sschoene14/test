<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
<!-- <div class="wrapper">
    <div class="container">
        <div>Title</div>
        <div>Login Info</div>
        <div>Submit</div>
    </div>
</div> -->
<div style="display: flex; justify-content: center;">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
    </div>

    <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password1" type="password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
                <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
                <label style="color: black" for="rememberme1">Remember me</label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>

        <Button label="Sign In" icon="pi pi-user" class="w-full"></Button>
    </div>
</div>
</div>

 
</template>

<style scoped>
.wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}
.container {
    width: 50%;
    height: 400px;
    background-color: white;
    border-radius: 20px;
    border: 3px solid rgba(44, 44, 44, 0.486)
}
</style>
