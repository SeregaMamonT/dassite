import api from '../api/services.js'

export default {
  state: {
    data: null
  },

  mutations: {
    setCurrentTrack(state, track) {
      state.data = { ...track };
    },

    setTrackSource(state, source) {
      state.data = { ...state, source };
    }
  },

  actions: {
    startTrack({ commit, getters }, trackId) {
      const track = getters.getTrackById(trackId);

      commit('setCurrentTrack', track);

      api.tracks.loadTrack(trackId, (source) => {
        commit('setTrackSource', source);
      });
    }
  },
};
