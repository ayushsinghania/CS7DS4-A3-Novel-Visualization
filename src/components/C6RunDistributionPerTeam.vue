<template>
  <div class="bottom">
    <b-row class="justify-content-md-center">
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="card" >
          <div class="card-header">IPL: Team performance across all the seasons</div>
          <div class="card-body">
            <sunburst-chart v-bind:sunburstdata="render()"></sunburst-chart>
          </div>
          <div class="card-footer"></div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import jsondata from '@/assets/data/RunDistributionPerTeam.json';

export default {
  name: 'RunDistributionPerTeam',
  data() {
    return {
      checks: jsondata,
      name:'Ayush'
    }
  },
  mounted() {

  },
  methods: {
    render() {
      return jsondata;
    }
  }
}
</script>

<style>

</style>
