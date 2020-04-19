<template>
  <div class="top">
    <div class="card">
      <div class="card-header">IPL: Maximum and Minimum runs scored by each team in single season</div>
      <div class="card-body">
        <bar-chart :chartData="chartData()" :options="options()"></bar-chart>
      </div>
      <div class="card-footer"></div>
    </div>
    <br>
  </div>
</template>

<script>
import MaxMinRunsScored from '@/assets/data/MaxMinRunsScored.json';
import Api from '@/app/Api';

export default {
  name: 'MaxMinRunsScored',
  data() {
    return {
      d:''
    }
  },
  components: {
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
        'labels':[],
        'max':[],
        'min':[]
      };

      MaxMinRunsScored.forEach(matches => {
        arr['labels'].push(matches['team'])
        arr['max'].push(matches['max'])
        arr['min'].push(matches['min'])
      })

      return arr;
    },
    chartData() {
      this.d = this.getData();
      return this.prepareConfig(this.d['max'],this.d['min'],this.d['labels'])['data'];
    },
    options() {
      return Api.prepareData(this.d)['options'];
    },
    prepareConfig(max,min,label) {
      var barChartData = {
        type: 'Bar',
        data: {
          labels: label,
          datasets: [{
            label: 'Max',
            backgroundColor:"#ED5F5A",
            borderColor: "#ED5F5A",
            data: max,
            fill: false,
          }, {
            label: 'Min',
            fill: false,
            backgroundColor: "#70FFA0",
            borderColor: "#70FFA0",
            data: min
          }]
        }
      };

      return barChartData;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
