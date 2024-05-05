/* eslint-disable */
import { createStore } from "vuex";
import * as DataHandler from '../handlers/Datahandler'
import { createBucketClient } from '@cosmicjs/sdk';

export default createStore({
  state: {
    whoami: null,
  },
  mutations: {
    setWhoami(state, value) {
      state.whoami = value
    },
  },
  actions: {
    async fetchCompanies({ commit }, val) {
      try {
        const response = await DataHandler.fetchCompanies(val)
        if(response != undefined) {
          commit('setWhoami', response)
        }
        return response
      } catch (err) {
        console.log(err)
      }
    },
    async fetchMedia({commit}, val) {
      const cosmic = createBucketClient({
        bucketSlug: 'meaghan-angel-tattoos-production',
        readKey: 'LGGedtiV9wzyTTOfrF7GvVwXq5s5a336UTw7SzEXNUnWGHMxsJ',
      });
      
      // Fetch content
      if(val.slug!==""){
        return await cosmic.media.find({folder: val.slug,}).skip(val.page*val.size).limit(9)

      } else {
        return await cosmic.media.find().skip(val.page*val.size).limit(9)
      }
      
    }
}
});