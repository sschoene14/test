<script>
import { ref, onMounted, watch } from "vue";
import { mapActions } from "vuex";
import { useStore } from "vuex";

export default {
  setup() {
    const active = ref(0);
    const first = ref(0)
    let tats = ref({});
    const isLoading = ref(true);
    const isLoaded = ref(false);
    let currentGenre = ref()
    const genres = [
      { id: 0, slug: "color" },
      { id: 1, slug: "black-and-gray" },
      { id: 2, slug: "color" },
      { id: 3, slug: "melanated" },
      { id: 4, slug: "manga" },
      { id: 5, slug: "cute" },
      { id: 6, slug: "realism" },
      { id: 7, slug: "traditional" },
      { id: 8, slug: "patches" },
    ];
    const items = ref([
      { label: "All" },
      { label: "Black & Gray" },
      { label: "Full Color" },
      { label: "Melanated Skin" },
      { label: "Manga Panels" },
      { label: "Cute & Sparkly" },
      { label: "Realism" },
      { label: "Traditional" },
      { label: "Embroidery" },
    ]);
    function newPage(val) {
        console.log(first)
        console.log(val)
        let params = {
        page: val.page,
        size: 9,
        slug: currentGenre.value,
      };
      console.log(params)
      store.dispatch("fetchMedia", params).then((r) => {
        console.log(r);
        tats.value = r;
        console.log(tats);
        setTimeout(function () {
          //do what you need here
          isLoading.value = false;
          isLoaded.value = true;
          console.log("Done!");
        }, 3000);
    })
}
    const store = useStore();
    onMounted(() => {
      console.log(`the component is now mounted.`);
      console.log(isLoading);
      let params = {
        page: 0,
        size: 9,
        slug: "color",
      };
      currentGenre.value="color"
      store.dispatch("fetchMedia", params).then((r) => {
        console.log(r);
        tats.value = r;
        console.log(tats);
        setTimeout(function () {
          //do what you need here
          isLoading.value = false;
          isLoaded.value = true;
          console.log("Done!");
        }, 3000);
      });
      console.log(tats.value);
    });
    watch(active, async (val, oldVal) => {
      isLoading.value = true;
      console.log(val);
      if (genres) {
        console.log(genres);
        Object.keys(genres).forEach((e) => {
          if (e == val) {
            currentGenre = genres[e].slug
            console.log(currentGenre)
            let params = {
              page: 0,
              size: 9,
              slug: genres[e].slug,
            };
            store.dispatch("fetchMedia", params).then((r) => {
              console.log(r);
              tats.value = r;
              console.log(tats);
              setTimeout(function () {
                //do what you need here
                isLoading.value = false;
                isLoaded.value = true;
                console.log("Done!");
              }, 3000);
            });
            console.log(tats.value);
          }
        });
      }
      isLoaded.value = false;
      first.value=0
    });
    return { isLoading, isLoaded, items, active, tats, genres, newPage, currentGenre, first };
  },
};
</script>

<template>
  <TabMenu
    class="card flex justify-content-center"
    style="width: 80%; display: flex; flex-wrap: wrap; margin: auto"
    v-model:activeIndex="active"
    :model="items"
  />
  <div
    v-if="isLoading"
    class="card flex justify-content-center"
    style="margin-top: 100px"
  >
    <ProgressSpinner></ProgressSpinner>
  </div>
  <div
    v-if="isLoaded"
    style="width: 80%; display: flex; flex-wrap: wrap; margin: auto; justify-content: center;"
  >
    <div
      v-for="image in tats.media"
      :key="image.id"
      class="card flex justify-content-center"
    >
      <!-- ADD IN LOADING SPINNER  -->

      <Image
        style="padding: 10px; object-fit: cover"
        width="400px"
        height="400px"
        :src="image.imgix_url + '?fit=crop&ar=1:1'"
        alt="Image"
        preview
      />
    </div>
  </div>
  <div class="card flex justify-content-center"></div>
  <Paginator v-model:first="first" :rows="9" :totalRecords="tats.total" @page="newPage"></Paginator>

</template>

<style scoped>
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
