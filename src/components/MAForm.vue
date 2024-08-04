<script>
import { ref, onMounted, watch } from "vue";
import { mapActions } from "vuex";
import { useStore } from "vuex";

export default {
  setup() {
    let fname = ref(null);
    let lname = ref(null);
    let pronouns = ref(null);
    const store = useStore();
    onMounted(() => {});
    return {
      fname,
      lname,
      pronouns,
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div>This is a form</div>
    <form
      name="ask-question"
      method="post"
      enctype="multipart/form-data"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="ask-question" />
      <p>
        <label>Name <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Reference <input type="file" name="reference" /></label>
      </p>
      <p>
        <button type="submit">Sendit</button>
      </p>
    </form>
  </div>
  <div class="mobileWrapper"></div>
</template>

<style scoped>
@media only screen and (max-width: 550px) {
  .mobileWrapper {
    width: 100%;
    margin: auto;
    margin-top: 30px;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid rgba(216 112, 72, 0.5);
  }
  .wrapper {
    display: none !important;
  }
}
.form {
  display: flex;
}
.wrapper {
  width: 80%;
  margin: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid rgba(216 112, 72, 0.5);
}
.mobileWrapper {
  display: none;
}
</style>
