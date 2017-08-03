import api from '../api/services.js'

export default {
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
    startTrack({ commit, getters }, trackId) {
      const track = getters.getTrackById(trackId);

      commit('setCurrentTrack', track);

      api.tracks.loadTrack(trackId, (source) => {
        commit('setTrackSource', source);
      });
    }
  },
};
