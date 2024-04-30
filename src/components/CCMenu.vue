<script>
import { ref } from "vue";
import { reactive } from "vue"; // "from '@vue/composition-api'" if you are using Vue <2.7
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { mapActions, mapState } from "vuex";

export default {
  setup() {
    let tiss = [
      { name: "Whole Chicken", id: 0, desc: "", price: 28 },
      { name: "Half Chicken", id: 0, desc: "", price: 15 },
      { name: "Quarter Chicken", id: 0, desc: "Breast or Leg", price: 10 },
    ];

    return {tiss};
  },
  mounted() {},
  methods: {},
};
</script>

<template>
  <div v-for="item in this.tiss" :key="item.id">{{ item.name }}</div>
</template>

<style scoped>
</style>
