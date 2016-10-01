var bar2 = document.getElementById('chart2');
var pieChart = document.getElementById('pieChart')

bar2.onclick = function() {
  bar2.setAttribute("style","max-width:200px");
  bar2.setAttribute("style","max-height:200px");
  console.log("TEST");
};


chart3.onclick = function() {

}

(function(window) {
  // namespacing App
  window.app = window.app || {};

  const cgEvents = {
    nato: null,
    allies: null,
    army: null,
    officials: null,
    supporters: null,
    joint: null,
    staff: null
  };
  const cosEvents = {
    nato: null,
    allies: null,
    army: null,
    officials: null,
    supporters: null,
    joint: null,
    staff: null
  };
  const dcgarEvents = {
    nato: null,
    allies: null,
    army: null,
    officials: null,
    supporters: null,
    joint: null,
    staff: null
  };
  const dcgnEvents = {
    nato: null,
    allies: null,
    army: null,
    officials: null,
    supporters: null,
    joint: null,
    staff: null
  };
  const dcgngEvents = {
    nato: null,
    allies: null,
    army: null,
    officials: null,
    supporters: null,
    joint: null,
    staff: null
  };
  const dcgsEvents = {
    nato: null,
    allies: null,
    army: null,
    officials: null,
    supporters: null,
    joint: null,
    staff: null
  };
  const g3Events = {
    nato: null,
    allies: null,
    army: null,
    officials: null,
    supporters: null,
    joint: null,
    staff: null
  };

  app.utils.Get('js/json/CG.json', (data) => {
    //console.log('the data',data);
    const parsedCG = JSON.parse(data);

    Object.keys(cgEvents).forEach((calendarEvent) => {
       let totalTimeCalEvent = parsedCG.items.filter(element => {
         return element.summary === calendarEvent;
       });


       // let timeCalEvent = totalTimes(totalTimeCalEvent);


       cgEvents[calendarEvent] = app.utils.totalTimes(totalTimeCalEvent);
       renderCG();
    });
  });
  app.utils.Get('js/json/COS.json', (data) => {
    //console.log('the data',data);
    const parsedCOS = JSON.parse(data);

    Object.keys(cosEvents).forEach((calendarEvent) => {
       let totalTimeCalEvent = parsedCOS.items.filter(element => {
         return element.summary === calendarEvent;
       });


       // let timeCalEvent = totalTimes(totalTimeCalEvent);


       cosEvents[calendarEvent] = app.utils.totalTimes(totalTimeCalEvent);
       renderCOS();
    });
  });
  app.utils.Get('js/json/DCGAR.json', (data) => {
    //console.log('the data',data);
    const parsedDCGAR = JSON.parse(data);

    Object.keys(dcgarEvents).forEach((calendarEvent) => {
       let totalTimeCalEvent = parsedDCGAR.items.filter(element => {
         return element.summary === calendarEvent;
       });


       // let timeCalEvent = totalTimes(totalTimeCalEvent);


       dcgarEvents[calendarEvent] = app.utils.totalTimes(totalTimeCalEvent);
       renderDCGAR();
    });
  });
  app.utils.Get('js/json/DCGN.json', (data) => {
    //console.log('the data',data);
    const parsedDCGN = JSON.parse(data);

    Object.keys(dcgnEvents).forEach((calendarEvent) => {
       let totalTimeCalEvent = parsedDCGN.items.filter(element => {
         return element.summary === calendarEvent;
       });


       // let timeCalEvent = totalTimes(totalTimeCalEvent);


       dcgnEvents[calendarEvent] = app.utils.totalTimes(totalTimeCalEvent);
       renderDCGN();
    });
  });
  app.utils.Get('js/json/DCGNG.json', (data) => {
    //console.log('the data',data);
    const parsedDCGNG = JSON.parse(data);

    Object.keys(dcgngEvents).forEach((calendarEvent) => {
       let totalTimeCalEvent = parsedDCGNG.items.filter(element => {
         return element.summary === calendarEvent;
       });


       // let timeCalEvent = totalTimes(totalTimeCalEvent);


       dcgngEvents[calendarEvent] = app.utils.totalTimes(totalTimeCalEvent);
       renderDCGNG();
    });
  });
  app.utils.Get('js/json/DCGS.json', (data) => {
    //console.log('the data',data);
    const parsedDCGS = JSON.parse(data);

    Object.keys(dcgsEvents).forEach((calendarEvent) => {
       let totalTimeCalEvent = parsedDCGS.items.filter(element => {
         return element.summary === calendarEvent;
       });


       // let timeCalEvent = totalTimes(totalTimeCalEvent);


       dcgsEvents[calendarEvent] = app.utils.totalTimes(totalTimeCalEvent);
       renderDCGS();
    });
  });
  app.utils.Get('js/json/G3.json', (data) => {
    //console.log('the data',data);
    const parsedG3 = JSON.parse(data);

    Object.keys(g3Events).forEach((calendarEvent) => {
       let totalTimeCalEvent = parsedG3.items.filter(element => {
         return element.summary === calendarEvent;
       });


       // let timeCalEvent = totalTimes(totalTimeCalEvent);

       g3Events[calendarEvent] = app.utils.totalTimes(totalTimeCalEvent);
       renderG3();
    });
  });



  function renderCG(){
    console.log('cgEvents',cgEvents);
    console.log('cosEvents',cosEvents);
    var cgChart = c3.generate({
      bindto: '#chart1',
        data: {
          columns: [
            ['NATO',cgEvents.nato],
            ['Allies',cgEvents.allies],
            ['Army',cgEvents.army],
            ['Officials',cgEvents.officials],
            ['Supporters',cgEvents.supporters],
            ['Joint',cgEvents.joint],
            ['Staff',cgEvents.staff]
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

    function renderCOS() {
      var chart2 = c3.generate({
      bindto: '#chart2',
        data: {
          columns: [
           ['NATO',cosEvents.nato],
          ['Allies',cosEvents.allies],
          ['Army',cosEvents.army],
          ['Officials',cosEvents.officials],
          ['Supporters',cosEvents.supporters],
          ['Joint',cosEvents.joint],
          ['Staff',cosEvents.staff]
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
    }

    function renderDCGAR() {
      var chart3 = c3.generate({
      bindto: '#chart3',
        data: {
          columns: [
            ['NATO',dcgarEvents.nato],
          ['Allies',dcgarEvents.allies],
          ['Army',dcgarEvents.army],
          ['Officials',dcgarEvents.officials],
          ['Supporters',dcgarEvents.supporters],
          ['Joint',dcgarEvents.joint],
          ['Staff',dcgarEvents.staff]
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
    }

    function renderDCGN() {
      var chart4 = c3.generate({
      bindto: '#chart4',
        data: {
          columns: [
            ['NATO',dcgnEvents.nato],
          ['Allies',dcgnEvents.allies],
          ['Army',dcgnEvents.army],
          ['Officials',dcgnEvents.officials],
          ['Supporters',dcgnEvents.supporters],
          ['Joint',dcgnEvents.joint],
          ['Staff',dcgnEvents.staff]
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
    }

    function renderDCGNG() {
      var chart5 = c3.generate({
      bindto: '#chart5',
        data: {
          columns: [
            ['NATO',dcgngEvents.nato],
          ['Allies',dcgngEvents.allies],
          ['Army',dcgngEvents.army],
          ['Officials',dcgngEvents.officials],
          ['Supporters',dcgngEvents.supporters],
          ['Joint',dcgngEvents.joint],
          ['Staff',dcgngEvents.staff]
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
    }

    function renderDCGS() {
      var chart6 = c3.generate({
      bindto: '#chart6',
        data: {
          columns: [
            ['NATO',dcgsEvents.nato],
          ['Allies',dcgsEvents.allies],
          ['Army',dcgsEvents.army],
          ['Officials',dcgsEvents.officials],
          ['Supporters',dcgsEvents.supporters],
          ['Joint',dcgsEvents.joint],
          ['Staff',dcgsEvents.staff]
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
    }

    function renderG3() {
      var chart7 = c3.generate({
      bindto: '#chart7',
        data: {
          columns: [
            ['NATO',g3Events.nato],
          ['Allies',g3Events.allies],
          ['Army',g3Events.army],
          ['Officials',g3Events.officials],
          ['Supporters',g3Events.supporters],
          ['Joint',g3Events.joint],
          ['Staff',g3Events.staff]
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


}(window));
