import Vue from 'vue';
import fetch from 'fetch-everywhere';

import template from './app-component-template.html';


const AppComponent = Vue.extend({
  template,

  data() {
    return {
      tracks: []
    }
  },


  created() {
    this.getData('/rest/tracks/all', (tracks) => {
      this.tracks = tracks;
    });    
  },


  methods: {
    getData(url, callback) {
      fetch(url)
      .then(resp => resp.json())
      .then(json => callback(json))
      .catch((e) => console.log(e));
    }
  }
  
});

export default AppComponent;