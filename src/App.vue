<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="https://www.iplt20.com" target="_blank">IPL DataViz</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item v-on:click.stop.prevent :to="{ path: '/Page1' }">General Info</b-nav-item>
          <b-nav-item v-on:click.stop.prevent :to="{ path: '/Page2' }" >Performance</b-nav-item>
          <b-nav-item v-on:click.stop.prevent :to="{ path: '/Page3' }" >Prediction</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="Kaggle-data" href="https://www.kaggle.com/datasets" target="_blank">Kaggle Dataset</b-nav-item>
          <b-nav-item class="active" href="https://github.com/ayushsinghania/CS7DS4-A3-Novel-Visualization" target="_blank">Github</b-nav-item>
          <b-nav-item ><status /></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="main-container">
      <h3>CS7DS4: A3-Novel Visualization of various statstics for Indian Premier League (IPL)</h3>
      <b-container fluid>
        <div class="clearfix">
          <router-view/>
        </div>
      </b-container>
    </div>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  mounted () {
    this.$Progress.finish()
  },
  created () {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  }
}
/* eslint-enable */
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2b3d50;
}

body,html {
  width: 100%;
  height: 100%;
  background-color: #eceded!important;
}

.card {
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.15);
}

.main-container {
  margin-top: 10px;
  margin-bottom: 50px;
}
.nav-link{
  color: rgb(255, 255, 255)!important;
}
.active {
  color: #20c997!important;
}
</style>
