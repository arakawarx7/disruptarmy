  var chart = c3.generate({
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

      axis: {
        x: {
          type: 'category',
          categories: ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7']
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

  var chart1 = c3.generate({
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

      axis: {
        x: {
          type: 'category',
          categories: ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7']
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
