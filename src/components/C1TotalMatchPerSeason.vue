<template>
  <div class="top">
    <b-row>
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="card">
          <div class="card-header">IPL: Total number of matches played across each season</div>
          <div class="card-body">
            <bar-chart :chartData="chartData()" :options="options()"></bar-chart>
          </div>
          <div class="card-footer"></div>
        </div>
        <br>
      </b-col>
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <C2MostMatchesPerGround />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Api from '@/app/Api';
import TotalMatchPerSeason from '@/assets/data/TotalMatchPerSeason.json';
import C2MostMatchesPerGround from '@/components/C2MostMatchesPerGround.vue'

export default {
  name: 'Main',
  data() {
    return {
    }
  },
  components: {
    C2MostMatchesPerGround
  },
  props: {
    msg:{
      type: String
    },
    name:{
      type: String
    }
  },
  methods:{
    getData() {
      var arr = {
        'data':[],
        'labels':[]
      };

      TotalMatchPerSeason.forEach(matches => {
        arr['data'].push(matches['total'])
        arr['labels'].push(matches['season'])
      })

      return arr;
    },
    chartData() {
      this.d = this.getData();
      return Api.prepareDataC1(this.d)['data'];
    },
    options() {
      return Api.prepareDataC1(this.d)['options'];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
