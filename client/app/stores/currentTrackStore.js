import api from '../api/services.js'

export default {
  namespaced: true,

  state: {
    value: null
  },

  mutations: {
    setCurrentTrack(state, track) {
      state.value = track;
    },

    setTrackSource(state, source) {
      state.value = { ...state.value, source };
    }
  },

  actions: {
    startTrack({ commit, rootGetters }, trackId) {
      const getTrackById = rootGetters["tracks/getTrackById"];

      commit('setCurrentTrack', getTrackById(trackId));

      api.tracks.loadTrack(trackId, (source) => {
        commit('setTrackSource', source);
      });
    }
  },

  getters: {
    getCurrentTrack(state) {
      return state.value;
    },

    getCurrentTrackSource(state, { getCurrentTrack }) {
      let currentTrack = getCurrentTrack;
      return currentTrack && currentTrack.source;
    }
  }
};
