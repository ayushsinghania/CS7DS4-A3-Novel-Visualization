<template>
  <div class="Top">
    <b-row >
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="card">
          <div class="card-header">IPL: Top Man of the Match awarded players across all seasons</div>
          <div class="card-body">
            <doughnut-chart :chartData="chartData()" :options="options()"></doughnut-chart>
          </div>
          <div class="card-footer"></div>
        </div>
        <br>
      </b-col>
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <C8MaxMinScores />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Api from '@/app/Api';
import MostManOfMatch from '@/assets/data/MostManOfMatch.json';
import C8MaxMinScores from '@/components/C8MaxMinScores.vue';

export default {
  name: 'MostManOfMatch',
  data() {
    return {
      d:''
    }
  },
  components: {
    C8MaxMinScores
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

      MostManOfMatch.forEach(matches => {
        arr['data'].push(matches['total'])
        arr['labels'].push(matches['labels'])
      })

      return arr;
    },
    chartData() {
      this.d = this.getData();
      return Api.prepareData(this.d)['data'];
    },
    options() {
      return Api.prepareData(this.d)['options'];
    }
  }
}
</script>

<style>

</style>
