

(function(window) {
  window.app = window.app || {};
  // console.log(app.Router.navigate('CG').event);

function gimmeChart(categoryObject) {
  console.log(categoryObject);
  var cgChart = c3.generate({
    bindto: '#chart1',
      data: {
        columns: [
          ['NATO',categoryObject.nato],
          ['Allies',categoryObject.allies],
          ['Army',categoryObject.army],
          ['Officials',categoryObject.officials],
          ['Supporters',categoryObject.supporters],
          ['Joint',categoryObject.joint],
          ['Staff',categoryObject.staff]
        ],
        type: 'bar',
        colors: {
          NATO: '#ff0000',
          Allies: '#0f0f0f',
          Army: '#00ff00',
          Officials: '000fff',
          Supporters: 'fff000',
          Joint: '0000ff',
          Staff: 'f0f0ff'
        }
      },

      legend: {
        show: false
      },

      axis: {
        x: {
          type: 'category',
          categories: ['G1']
        }
      },

      bar: {
          width: {
              ratio: 0.5 // this makes bar width 50% of length between ticks
          }
          // or
          //width: 100 // this makes bar width 100px
        }
    });
  }

    var chart2 = c3.generate({
      bindto: '#chart2',
        data: {
          columns: [
            ['NATO',700],
            ['Allies',600],
            ['Army',500],
            ['Officials',400],
            ['Supporters',300],
            ['Joint',200],
            ['Staff',100]
          ],
          type: 'bar',
          colors: {
            NATO: '#ff0000',
            Allies: '#0f0f0f',
            Army: '#00ff00',
            Officials: '000fff',
            Supporters: 'fff000',
            Joint: '0000ff',
            Staff: 'f0f0ff'
          }
        },

        onmouseover: function() {
          chart2.transform('donut');
        },

        onmouseout: function() {
          chart2.transform('bar');
        },

        legend: {
          show: false
        },

        axis: {
          x: {
            type: 'category',
            categories: ['G2']
          },

          y: {
            show: false
          }
        },

        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }
    });

    var chart3 = c3.generate({
      bindto: '#chart3',
        data: {
          columns: [
            ['NATO',700],
            ['Allies',600],
            ['Army',500],
            ['Officials',400],
            ['Supporters',300],
            ['Joint',200],
            ['Staff',100]
          ],
          type: 'bar',
          colors: {
            NATO: '#ff0000',
            Allies: '#0f0f0f',
            Army: '#00ff00',
            Officials: '000fff',
            Supporters: 'fff000',
            Joint: '0000ff',
            Staff: 'f0f0ff'
          }
        },

        onmouseover: function() {
          chart3.transform('donut');
        },

        onmouseout: function() {
          chart3.transform('bar');
        },

        legend: {
          show: false
        },

        axis: {
          x: {
            type: 'category',
            categories: ['G3']
          },

          y: {
            show: false
          }
        },

        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }
    });

    var chart4 = c3.generate({
      bindto: '#chart4',
        data: {
          columns: [
            ['NATO',700],
            ['Allies',600],
            ['Army',500],
            ['Officials',400],
            ['Supporters',300],
            ['Joint',200],
            ['Staff',100]
          ],
          type: 'bar',
          colors: {
            NATO: '#ff0000',
            Allies: '#0f0f0f',
            Army: '#00ff00',
            Officials: '000fff',
            Supporters: 'fff000',
            Joint: '0000ff',
            Staff: 'f0f0ff'
          }
        },

        onmouseover: function() {
          chart4.transform('donut');
        },

        onmouseout: function() {
          chart4.transform('bar');
        },

        legend: {
          show: false
        },

        axis: {
          x: {
            type: 'category',
            categories: ['G4']
          },

          y: {
            show: false
          }
        },

        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }
    });

    var chart5 = c3.generate({
      bindto: '#chart5',
        data: {
          columns: [
            ['NATO',700],
            ['Allies',600],
            ['Army',500],
            ['Officials',400],
            ['Supporters',300],
            ['Joint',200],
            ['Staff',100]
          ],
          type: 'bar',
          colors: {
            NATO: '#ff0000',
            Allies: '#0f0f0f',
            Army: '#00ff00',
            Officials: '000fff',
            Supporters: 'fff000',
            Joint: '0000ff',
            Staff: 'f0f0ff'
          }
        },

        onmouseover: function() {
          chart5.transform('donut');
        },

        onmouseout: function() {
          chart5.transform('bar');
        },

        legend: {
          show: false
        },

        axis: {
          x: {
            type: 'category',
            categories: ['G5']
          },

          y: {
            show: false
          }
        },

        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }
    });

    var chart6 = c3.generate({
      bindto: '#chart6',
        data: {
          columns: [
            ['NATO',700],
            ['Allies',600],
            ['Army',500],
            ['Officials',400],
            ['Supporters',300],
            ['Joint',200],
            ['Staff',100]
          ],
          type: 'bar',
          colors: {
            NATO: '#ff0000',
            Allies: '#0f0f0f',
            Army: '#00ff00',
            Officials: '000fff',
            Supporters: 'fff000',
            Joint: '0000ff',
            Staff: 'f0f0ff'
          }
        },

        onmouseover: function() {
          chart6.transform('donut');
        },

        onmouseout: function() {
          chart6.transform('bar');
        },

        legend: {
          show: false
        },

        axis: {
          x: {
            type: 'category',
            categories: ['G6']
          },

          y: {
            show: false
          }
        },

        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }
    });

    var chart7 = c3.generate({
      bindto: '#chart7',
        data: {
          columns: [
            ['NATO',700],
            ['Allies',600],
            ['Army',500],
            ['Officials',400],
            ['Supporters',300],
            ['Joint',200],
            ['Staff',100]
          ],
          type: 'bar',
          colors: {
            NATO: '#ff0000',
            Allies: '#0f0f0f',
            Army: '#00ff00',
            Officials: '000fff',
            Supporters: 'fff000',
            Joint: '0000ff',
            Staff: 'f0f0ff'
          }
        },

        onmouseover: function() {
          chart7.transform('donut');
        },

        onmouseout: function() {
          chart7.transform('bar');
        },

        legend: {
          position: 'right'
        },

        axis: {
          x: {
            type: 'category',
            categories: ['G7']
          },

          y: {
            show: false
          }
        },

        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }
    });

}
(window))

(function(window) {
  // namespacing App
  window.app = window.app || {};
   const calendarEvents = {
          nato: null,
          allies: null,
          army: null,
          officials: null,
          supporters: null,
          joint: null,
          staff: null
        };

  app.utils.Get('js/json/CG.json', (data) => {
    console.log('the data',data);
    const parsedCG = JSON.parse(data);

     Object.keys(calendarEvents).forEach((calendarEvent) => {
       let totalTimeCalEvent = parsedCG.items.filter(element => {
         return element.summary === calendarEvent;
       });
       console.log("total time cal event",totalTimeCalEvent);

       // let timeCalEvent = totalTimes(totalTimeCalEvent);


       calendarEvents[calendarEvent] = app.utils.totalTimes(totalTimeCalEvent);
       console.log("this.event[calendarEvent]",calendarEvents[calendarEvent]);
    });
    render();
  });

function render(){

console.log('calendarEvents',calendarEvents);


}


  }(window));

