<template>
  <div class="top">
    <b-row>
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="card">
          <div class="card-header">IPL: Total Sixes and Fours scored across each season</div>
          <div class="card-body">
            <line-chart :chartData="chartData()" :options="options()"></line-chart>
          </div>
          <div class="card-footer"></div>
        </div>
        <br>
      </b-col>
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <C5TotalRunPerYear />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Api from '@/app/Api';
import C5TotalRunPerYear from '@/components/C5TotalRunPerYear.vue'
import TotalSixesFoursPerSeason from '@/assets/data/TotalSixesFoursPerSeaon.json';

export default {
  name: 'TotalSixesFoursPerSeason',
  data () {
    return {
    }
  },
  components:{
    C5TotalRunPerYear,
  },
  mounted() {

  },
  computed: {
    updateData() {
      this.chartData();
      return true;
    }
  },
  methods: {
    getData() {
      var arr = {
        'data':[],
        'labels':[],
        'sixes':[],
        'fours':[]
      };

      TotalSixesFoursPerSeason.forEach(matches => {
        arr['sixes'].push(matches['sixes'])
        arr['fours'].push(matches['fours'])
      })

      return arr;
    },
    chartData() {
      this.d = this.getData();
      return this.prepareConfig(this.d['sixes'],this.d['fours'])['data'];
    },
    options() {
      return Api.prepareData(this.d)['options'];
    },
    prepareConfig(sixes,fours) {
      var config = {
        type: 'line',
        data: {
          labels: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
          datasets: [{
            label: 'Sixes',
            backgroundColor:"#007bff",
            borderColor: "#007bff",
            data: sixes,
            fill: false,
          }, {
            label: 'Fours',
            fill: false,
            backgroundColor: "#70FFA0",
            borderColor: "#70FFA0",
            data: fours
          }]
        }
      }

      return config;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
