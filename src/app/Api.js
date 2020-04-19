/**
* API class for communication with the server
*/
class Api {

  /**
  * constructor
  */
  constructor() {

  }

  isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }
  /**
  * Prepare data for chart.
  * @returns {number}
  */
  prepareData(jsonData) {

    var arr = {
      'data': {
        'labels': jsonData['labels'],
        'datasets': [
          {
            'backgroundColor': [
              'rgba(255, 99, 134)',
              'rgba(53, 161, 236)',
              'rgba(255, 205, 87)',
              'rgba(74, 193, 191)',
              'rgba(151, 103, 254)',
              'rgba(253, 156, 66)',
              'rgba(119, 56, 121)',
              'rgba(28, 164, 255)',
              'rgba(254, 22, 29)',
              'rgba(62, 8, 115)',
              '#28a744',
              '#6610f2',
              '#17a2b9'
            ],
            'label': '',
            'data': jsonData['data']
          }
        ]
      },
      'options': {
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }


    if((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1))
    {
      arr.options.animation = false;
    }

    return arr;
  }

    /**
  * Prepare data for chart.
  * @returns {number}
  */
 prepareDataC1(jsonData1) {

  var arr = {
    'data': {
      'labels': jsonData1['labels'],
      'datasets': [
        {
          'label': 'Total Matches',
          'backgroundColor': [
            'rgba(255, 99, 134)',
            'rgba(53, 161, 236)',
            'rgba(255, 205, 87)',
            'rgba(74, 193, 191)',
            'rgba(151, 103, 254)',
            'rgba(253, 156, 66)',
            'rgba(119, 56, 121)',
            'rgba(28, 164, 255)',
            'rgba(254, 22, 29)',
            'rgba(62, 8, 115)',
            '#28a744',
            '#6610f2',
            '#17a2b9'
          ],
          'data': jsonData1['data']
        }
      ]
    },
    'options': {
      legend: {
        display: true
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }


  if((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1))
  {
    arr.options.animation = false;
  }

  return arr;
}

}

export default new Api();
