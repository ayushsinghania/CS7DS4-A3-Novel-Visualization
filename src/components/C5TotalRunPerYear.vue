<template>
  <div class="top">
    <div class="card">
      <div class="card-header">IPL: Total Run Scored by all the teams across each season</div>
      <div class="card-body" >
        <div class="chart-container">
          <bar-chart :chartData="chartData()" :options="options()"></bar-chart>
        </div>
      </div>
      <div class="card-footer"></div>
    </div>
    <br>
  </div>
</template>

<script>
import Api from '@/app/Api';
import TotalRunPerYear from '@/assets/data/TotalRunPerYear.json';

export default {
  name: 'TotalRunPerYear',
  data() {
    return {
      d:''
    }
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

      TotalRunPerYear.forEach(matches => {
        arr['data'].push(matches['total'])
        arr['labels'].push(matches['year'])
      })

      return arr;
    },
    chartData() {
      this.d = this.getData();
      var data = Api.prepareData(this.d)['data'];
      data.datasets[0].backgroundColor = 'rgba(220, 50, 100)';
      return data;
    },
    options() {
      return Api.prepareData(this.d)['options'];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
