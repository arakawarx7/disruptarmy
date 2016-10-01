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
            NATO: 'rgb(105,90,90)',
            Allies: 'rgb(134,159,156)',
            Army: 'rgb(186,188,119)',
            Officials: 'rgb(207,216,182)',
            Supporters: '#43442B',
            Joint: '#c8707e',
            Staff: '#5AA08D'
          }
        },

        legend: {
          show: false
        },

        axis: {
          x: {
            type: 'category',
            categories: ['Commanding General']
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
            NATO: 'rgb(105,90,90)',
            Allies: 'rgb(134,159,156)',
            Army: 'rgb(186,188,119)',
            Officials: 'rgb(207,216,182)',
            Supporters: '#43442B',
            Joint: '#c8707e',
            Staff: '#5AA08D'
          }
        },

        legend: {
          show: false
        },

        axis: {
          x: {
            type: 'category',
            categories: ['Chief of Staff']
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
            NATO: 'rgb(105,90,90)',
            Allies: 'rgb(134,159,156)',
            Army: 'rgb(186,188,119)',
            Officials: 'rgb(207,216,182)',
            Supporters: '#43442B',
            Joint: '#c8707e',
            Staff: '#5AA08D'
          }
        },

        legend: {
          show: false
        },

        axis: {
          x: {
            type: 'category',
            categories: ['DCG - Army Reserve']
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
            NATO: 'rgb(105,90,90)',
            Allies: 'rgb(134,159,156)',
            Army: 'rgb(186,188,119)',
            Officials: 'rgb(207,216,182)',
            Supporters: '#43442B',
            Joint: '#c8707e',
            Staff: '#5AA08D'
          }
        },

        legend: {
          show: false
        },

        axis: {
          x: {
            type: 'category',
            categories: ['DCG - National Guard']
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
            NATO: 'rgb(105,90,90)',
            Allies: 'rgb(134,159,156)',
            Army: 'rgb(186,188,119)',
            Officials: 'rgb(207,216,182)',
            Supporters: '#43442B',
            Joint: '#c8707e',
            Staff: '#5AA08D'
          }
        },

        legend: {
          show: false
        },

        axis: {
          x: {
            type: 'category',
            categories: ['DCG - National']
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
            NATO: 'rgb(105,90,90)',
            Allies: 'rgb(134,159,156)',
            Army: 'rgb(186,188,119)',
            Officials: 'rgb(207,216,182)',
            Supporters: '#43442B',
            Joint: '#c8707e',
            Staff: '#5AA08D'
          }
        },

        legend: {
          show: false
        },

        axis: {
          x: {
            type: 'category',
            categories: ['DCG - South']
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
            NATO: 'rgb(105,90,90)',
            Allies: 'rgb(134,159,156)',
            Army: 'rgb(186,188,119)',
            Officials: 'rgb(207,216,182)',
            Supporters: '#43442B',
            Joint: '#c8707e',
            Staff: '#5AA08D'
          }
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
    var pie = document.getElementById('pieChart');
    var bar1 = document.getElementById('chart1');
    var bar2 = document.getElementById('chart2');
    var bar3 = document.getElementById('chart3');
    var bar4 = document.getElementById('chart4');
    var bar5 = document.getElementById('chart5');
    var bar6 = document.getElementById('chart6');
    var bar7 = document.getElementById('chart7');

    var info = document.getElementById('info');
    var big = document.getElementById('big-words');
    var med = document.getElementById('med-words');
    var small = document.getElementById('small-words');

    bar1.onclick = function() {
      big.innerHTML = "17.8% Supporters"
      med.innerHTML = "17.5% Officials"
      small.innerHTML = "15.0% Staff"

      var cgChart = c3.generate({
         bindto: '#pieChart',
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
             type: 'donut',
             colors: {
               NATO: 'rgb(105,90,90)',
               Allies: 'rgb(134,159,156)',
               Army: 'rgb(186,188,119)',
               Officials: 'rgb(207,216,182)',
               Supporters: '#43442B',
               Joint: '#c8707e',
               Staff: '#5AA08D'
             }
           },

           donut: {
             title: "Commanding General"
           }

         });
       }

     bar2.onclick = function() {

       big.innerHTML = "52.4% Staff"
       med.innerHTML = "11.1% Army"
       small.innerHTML = "10.6% NATO"

       var cgChart = c3.generate({
          bindto: '#pieChart',
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
              type: 'donut',
              colors: {
                NATO: 'rgb(105,90,90)',
                Allies: 'rgb(134,159,156)',
                Army: 'rgb(186,188,119)',
                Officials: 'rgb(207,216,182)',
                Supporters: '#43442B',
                Joint: '#c8707e',
                Staff: '#5AA08D'
              }
            },

            donut: {
              title: "Chief of Staff"
            }

          });
        }

      bar3.onclick = function() {
        big.innerHTML = "20.9% Allies"
        med.innerHTML = "17.2% NATO"
        small.innerHTML = "16.1% Staff"

        var cgChart = c3.generate({
           bindto: '#pieChart',
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
               type: 'donut',
               colors: {
                 NATO: 'rgb(105,90,90)',
                 Allies: 'rgb(134,159,156)',
                 Army: 'rgb(186,188,119)',
                 Officials: 'rgb(207,216,182)',
                 Supporters: '#43442B',
                 Joint: '#c8707e',
                 Staff: '#5AA08D'
               }
             },

             donut: {
               title: "DCG - Army Reserve"
             }

           });
         }

     bar4.onclick = function() {

       big.innerHTML = "64.6% Joint"
       med.innerHTML = "10.8% Supporters"
       small.innerHTML = "7.7% Army"

       var cgChart = c3.generate({
          bindto: '#pieChart',
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
              type: 'donut',
              colors: {
                NATO: 'rgb(105,90,90)',
                Allies: 'rgb(134,159,156)',
                Army: 'rgb(186,188,119)',
                Officials: 'rgb(207,216,182)',
                Supporters: '#43442B',
                Joint: '#c8707e',
                Staff: '#5AA08D'
              }
            },
            donut: {
              title: "DCG - National Guard"
            }

          });
        }

      bar5.onclick = function() {

        big.innerHTML = "58.5% Officials"
        med.innerHTML = "16.9% Allies"
        small.innerHTML = "10.8% Joint"

        var cgChart = c3.generate({
           bindto: '#pieChart',
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
               type: 'donut',
               colors: {
                 NATO: 'rgb(105,90,90)',
                 Allies: 'rgb(134,159,156)',
                 Army: 'rgb(186,188,119)',
                 Officials: 'rgb(207,216,182)',
                 Supporters: '#43442B',
                 Joint: '#c8707e',
                 Staff: '#5AA08D'
               }
             },

             donut: {
               title: "DCG - National"
             }

           });
         }

     bar6.onclick = function() {

       big.innerHTML = "70.2% Allies"
       med.innerHTML = "9.6% Joint"
       small.innerHTML = "6.7% NATO"

       var cgChart = c3.generate({
          bindto: '#pieChart',
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
              type: 'donut',
              colors: {
                NATO: 'rgb(105,90,90)',
                Allies: 'rgb(134,159,156)',
                Army: 'rgb(186,188,119)',
                Officials: 'rgb(207,216,182)',
                Supporters: '#43442B',
                Joint: '#c8707e',
                Staff: '#5AA08D'
              }
            },

            donut: {
              title: "DCG - South"
            }

          });
        }

      bar7.onclick = function() {

        big.innerHTML = "54.7% Army"
        med.innerHTML = "10.8% Joint"
        small.innerHTML = "10.5% Staff"

      var cgChart = c3.generate({
         bindto: '#pieChart',
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
             type: 'donut',

             colors: {
               NATO: 'rgb(105,90,90)',
               Allies: 'rgb(134,159,156)',
               Army: 'rgb(186,188,119)',
               Officials: 'rgb(207,216,182)',
               Supporters: '#43442B',
               Joint: '#c8707e',
               Staff: '#5AA08D'
             }
           },

           donut: {
             title: "G3"
           }

         });
       }

}(window));
