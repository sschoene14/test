<script>
import { ref, onMounted, watch } from "vue";
import { mapActions } from "vuex";
import { useStore } from "vuex";

export default {
  setup() {
    return 0;
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="QAItem">
      <h2>How is tattooing darker skin different than light skin?</h2>
      
      <div class="answer_wrapper">
        <div class="answer_image">
          <img
            style="height: 400px"
            src="/layout/images/website_assets/skin_tones.png"
          />
          <div
            style="
              text-align: right;
              font-size: smaller;
              color: rgba(0, 0, 0, 0.5);
            "
          >
            photo credit instagram @mr.lauder
          </div>
        </div>
        <div class="answer"><div>
          First, It helps to think of skin as a filter made up of many
          translucent layers. When ink is injected into a person’s skin, the
          healed tattoo will be viewed through those layers. The more melanin a
          person has, the darker those layers are, and depending on the tattoo…
          the more challenging it may be to see the finished product. While
          black lines will show up the best, because they create the most
          contrast, that is not to say that bright colour tattoos are not
          possible on dark skin tones. When designing a tattoo for a client with
          a dark skin tone, the artist will need to take into account the
          client’s undertones and choose the ink accordingly.
        </div>

        <div style="margin-top: 20px">
          Imagine you have a piece of dark red paper, and you try to paint on it
          with red watercolour paints. The result? You will see a lot of that
          paper underneath, and the red won’t show up well, as it blends into
          the background colour. Finding inks that compliment a client's skin
          tone and undertones, as well as create effective contrast are key to
          achieving a colour tattoo that pops. One way to learn how ink will
          show up on a dark skin client is a colour test. This is when the
          artist does a small series of dots or lines on a part of the client's
          body in various colours. Allow two-four weeks for the tattoo to heal
          and voila, the artist and client can determine how the ink will react
          to the skin and move forward armed with that information.
        </div>
    </div>
        
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.answer_wrapper {
    display: flex;
}
.answer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 20px;
}
.wrapper {
  width: 80%;
  margin: auto;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.QAItem {
  text-align: center;
}
</style>
