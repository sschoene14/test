<script>
import { ref, onMounted, watch } from "vue";
import { mapActions } from "vuex";
import { useStore } from "vuex";

export default {
  setup() {
    return {};
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
          First, lets think of the skin as a filter made up of many
          semi-transparent layers. When the tattoo ink is put into a person’s skin, the
          ink in the tattoo will be viewed through those layers. For folks with more melanin in their skin,
          the darker those layers are, and the more they will affect the viewed color of the ink underneath the skin. In some cases, black 
          lines will show up the best because they create the most
          contrast. However, that does not mean that bright colour tattoos are not
          possible on people with more melanin in their skin. When designing a tattoo for a client with
          a darker skin tone, it is important for the artist to take into account the
          client’s undertones and choose the ink accordingly.
        </div>

        <div style="margin-top: 20px">
            To help better understand this concept lets use the following scenario. Imagine that you have a piece of dark blue paper
            and you try to draw on it with a blue marker. The color of the paper will blend into the color of your marker because they are so similar
            and it wont show up as well. To combat this, it is important for the artist to use ink colors that compliment a client's skin
          tone and corresponding undertones, as well as create effective contrast to make sure that the ink is easily differentiated from the melanin in the skin. 

        </div>
        <div style="margin-top: 10px;">One way to learn how ink will show up on a dark skin client is a colour test. This is when the
          artist does a small series of dots or lines on a part of the client's
          body in various colours. Once the color test tattoo is healed you should be able to get a better idea of what the colored inks will look like when viewed through 
          the transparent layers of your skin, and you can make a more educated decision about what colors to use in your tattoo and how they will look in the finished product.</div>
    </div>
        
        
      </div>
    </div>
  </div>
  <div class="wrapperMobile">
    <div class="QAItem">
      <h2>How is tattooing darker skin different than light skin?</h2>
      
      <div class="answer_wrapper">
        
        <div class="answer"><div>
          First, lets think of the skin as a filter made up of many
          semi-transparent layers. When the tattoo ink is put into a person’s skin, the
          ink in the tattoo will be viewed through those layers. For folks with more melanin in their skin,
          the darker those layers are, and the more they will affect the viewed color of the ink underneath the skin. In some cases, black 
          lines will show up the best because they create the most
          contrast. However, that does not mean that bright colour tattoos are not
          possible on people with more melanin in their skin. When designing a tattoo for a client with
          a darker skin tone, it is important for the artist to take into account the
          client’s undertones and choose the ink accordingly.
        </div>

        <div style="margin-top: 20px">
            To help better understand this concept lets use the following scenario. Imagine that you have a piece of dark blue paper
            and you try to draw on it with a blue marker. The color of the paper will blend into the color of your marker because they are so similar
            and it wont show up as well. To combat this, it is important for the artist to use ink colors that compliment a client's skin
          tone and corresponding undertones, as well as create effective contrast to make sure that the ink is easily differentiated from the melanin in the skin. 

        </div>
        <div style="margin-top: 10px;">One way to learn how ink will show up on a dark skin client is a colour test. This is when the
          artist does a small series of dots or lines on a part of the client's
          body in various colours. Once the color test tattoo is healed you should be able to get a better idea of what the colored inks will look like when viewed through 
          the transparent layers of your skin, and you can make a more educated decision about what colors to use in your tattoo and how they will look in the finished product.</div>
    </div>
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
        
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 1160px) {
    .answer_wrapper{
        flex-direction: column;
    }
  .wrapperMobile {
    display: block !important;
    width: 100%;
  }
  .textMobile {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  .photoMobile {
    width: 100%
  }
  .wrapper {
    display: none !important;
  }
}
.wrapperMobile {
  display: none ;
}

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
