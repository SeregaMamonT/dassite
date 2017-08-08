<template>
  <input
      type="text"
      placeholder="Search..."
      v-model="value"
  />
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    data() {
      return {
        value: ""
      }
    },

    watch: {
      value(newVal) {
        this.$store.commit("tracks/filter", newVal);
      }
    }
  });
</script>

<style>
  input {
    width: 100%;
    margin-bottom: 20px;
  }
</style>