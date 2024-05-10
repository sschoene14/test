<script>
import { ref, onMounted, watch } from "vue";
import { mapActions } from "vuex";
import { useStore } from "vuex";

export default {
  setup() {
    const first = ref(0);
    let flash = ref({});
    const isLoading = ref(true);
    const isLoaded = ref(false);
    function newPage(val) {
      isLoaded.value = false
      isLoading.value = true;
      let params = {
        page: val.page,
        size: 9,
        slug: "flash",
      };
      store.dispatch("fetchMedia", params).then((r) => {
        flash.value = r;
        setTimeout(function () {
          //do what you need here
          isLoading.value = false;
          isLoaded.value = true;
        }, 3000);
      });
    }
    const store = useStore();
    onMounted(() => {
      isLoading.value = true
      let params = {
        page: 0,
        size: 9,
        slug: "flash",
      };
      store.dispatch("fetchMedia", params).then((r) => {
        flash.value = r;
        setTimeout(function () {
          //do what you need here
          isLoading.value = false;
          isLoaded.value = true;
        }, 3000);
      });
    });

    return {
      isLoading,
      isLoaded,
      flash,
      newPage,
      first,
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div
      v-if="isLoading"
      class="card flex justify-content-center"
      style="margin-top: 100px"
    >
      <ProgressSpinner></ProgressSpinner>
    </div>
    <div
      v-if="isLoaded"
      style="
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        justify-content: center;
      "
    >
      <div
        v-for="image in flash.media"
        :key="image.id"
        class="card flex justify-content-center"
      >
        <!-- ADD IN LOADING SPINNER  -->

        <Image
          style="padding: 10px; object-fit: cover"
          width="400px"
          height="400px"
          :src="image.imgix_url"
          alt="Image"
          preview
        />
      </div>
    </div>
    <div class="card flex justify-content-center"></div>
    <Paginator
      v-model:first="first"
      :rows="9"
      :totalRecords="flash.total"
      @page="newPage"
    ></Paginator>
  </div>
  <div class="wrapperMobile">

<!-- 
    <div class="card flex justify-content-center">
    <Dropdown
      v-model="selectedFilter"
      :options="filters"
      optionLabel="name"
      placeholder="Select a Catagory"
      checkmark
      :highlightOnSelect="false"
      style="width: 80%;"
    />
    </div> -->
    <div
      v-if="isLoading"
      class="card flex justify-content-center"
      style="margin-top: 100px"
    >
      <ProgressSpinner></ProgressSpinner>
    </div>
    <div
      v-if="isLoaded"
      style="
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        justify-content: center;
      "
    >
      <div
        v-for="image in flash.media"
        :key="image.id"
        class="card flex justify-content-center"
      >
        <!-- ADD IN LOADING SPINNER  -->

        <Image
          style="margin-bottom: 10px; object-fit: cover"
          width="400px"
          height="400px"
          :src="image.imgix_url "
          alt="Image"
          preview
        />
      </div>
    </div>
    <div class="card flex justify-content-center">
    <Paginator
      v-model:first="first"
      :rows="9"
      :totalRecords="flash.total"
      @page="newPage"
      template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    ></Paginator>
</div>
</div>

</template>

<style scoped>
@media only screen and (max-width: 1430px) {
  .wrapperMobile {
    display: block !important;
    width: 100%;
  }
  .wrapper {
    display: none !important;
  }
}
.wrapper {
    display: block;
}
.wrapperMobile {
    display: none;
}
div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 20%;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}
</style>
