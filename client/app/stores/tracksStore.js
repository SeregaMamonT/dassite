import api from '../api/services.js'

export default  {
  state: {
    data: []
  },

  mutations: {
    loadTracks(state, tracks) {
      state.data = [...tracks];
    },

    addTrack(state) {
      let newTrack = { artist: "Muse", title: "Supermassive Black Hole" };
      state.data = [...state.data, newTrack];
    },
  },

  actions: {
    loadTracks(context) {
      api.tracks.loadAll((tracks) => {
        context.commit('loadTracks', tracks);
      });
    }
  },
};
