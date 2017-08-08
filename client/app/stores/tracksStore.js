import api from '../api/services.js'

export default  {
  namespaced: true,

  state: {
    value: [],
    filter: null
  },

  mutations: {
    loadTracks(state, tracks) {
      state.value = [...tracks];
    },

    addTrack(state) {
      let newTrack = { artist: "Muse", title: "Supermassive Black Hole" };
      state.value = [...state.value, newTrack];
    },

    filter(state, filter) {
      state.filter = filter;
    }
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
    },

    getFilteredTracks(state, { getAllTracks }) {
      return getAllTracks.filter(createFilter(state.filter))
    }
  }
};


function createFilter(filter) {
  if (filter) {
    return (track) => indexIgnoreCase(track.artist, filter) > -1 ||
                      indexIgnoreCase(track.title, filter) > -1;
  }
  else {
    return (track) => true;
  }
}


function indexIgnoreCase(str, subStr) {
  return str.toLowerCase().indexOf(subStr.toLowerCase());
}
