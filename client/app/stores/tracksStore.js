import api from '../api/services.js'

export default  {
  namespaced: true,

  state: {
    value: []
  },

  mutations: {
    loadTracks(state, tracks) {
      state.value = [...tracks];
    },

    addTrack(state) {
      let newTrack = { artist: "Muse", title: "Supermassive Black Hole" };
      state.value = [...state.value, newTrack];
    },
  },

  actions: {
    loadTracks(context) {
      api.tracks.loadAll((tracks) => {
        context.commit('loadTracks', tracks);
      });
    }
  },

  getters: {
    getAllTracks(state) {
      return state.value;
    },

    getTrackById(state, { getAllTracks }) {
      return (trackId) => getAllTracks.find((track) => track.id === trackId);
    }
  }
};
