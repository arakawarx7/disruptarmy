/*
 * A State is a class with the interface
 * {
 *   rendered : Element->Void->Void
 * }
 */

(function(window) {
  // namespace our App
  window.app = window.app || {};

  // each state will prepare the data to be rendered
  // then have a function that returns the new state dom tree

  class Default {
    constructor(){
      this.title = 'Poll Demo';
      this.ready = placeholder => true;
    }

    rendered(callback){
      // render now
      this.render(callback);
    }

    render(readyFunc){
      const view = document.createElement('div');
      const header = document.createElement('h2');

      header.innerHTML = this.title;

      view.appendChild(header);
      readyFunc(view);
    }

  }

  class CG {
    // prepare the data
    constructor(){
      // initial state
      this.event = {
        nato: null,
        allies: null,
        army: null,
        officials: null,
        supporters: null,
        joint: null,
        staff: null
      };

      // callback function to run after data is ready
      this.ready = placeholder => true;

      App.utils.Get('js/json/CG.json', (data) => {
          console.log('the data',data);
          const parsedCG = JSON.parse(data);



          function totalTimes(array){
          return array.map(element => {
            let start = element.start.dateTime.slice(11,16);
            let end = element.end.dateTime.slice(11,16);
            if(start.charAt(3) === '3') {
              start = parseInt(start.substring(0,2)) + .5;
            } else {
              start = parseInt(start.substring(0,2));
            }
            if(end.charAt(3) === '3') {
              end = parseFloat(end.substring(0,2)) + .5;
            } else {
              end = parseFloat(end.substring(0,2));
            }
            return (end - start);
          }).reduce((time,next)=> {
            return time +=next;
          },0);

        }

          //Very non-dry version of totaling all the times spent in each category
          let totalTimeNato = parsedCG.items.filter(element => {
            return element.summary === 'nato';
          });
          let timeNato = totalTimes(totalTimeNato);




          let totalTimeAllies = parsedCG.items.filter(element => {
            return element.summary === 'allies';
          });

          let timeAllies = totalTimes(totalTimeAllies);



          let totalTimeArmy = parsedCG.items.filter(element => {
            return element.summary === 'army';
          });
          let timeArmy = totalTimes(totalTimeArmy);



          let totalTimeOfficials = parsedCG.items.filter(element => {
            return element.summary === 'officials';
          });
          let timeOfficials = totalTimes(totalTimeOfficials);




          let totalTimeSupporters = parsedCG.items.filter(element => {
            return element.summary === 'supporters';
          });
          let timeSupporters = totalTimes(totalTimeSupporters);


          let totalTimeJoint = parsedCG.items.filter(element => {
            return element.summary === 'joint';
          });
          let timeJoint = totalTimes(totalTimeJoint);


          let totalTimeStaff = parsedCG.items.filter(element => {
            return element.summary === 'staff';
          });
          let timeStaff = totalTimes(totalTimeStaff);


          this.event.nato = timeNato;
          this.event.allies = timeAllies;
          this.event.army = timeArmy;
          this.event.officials = timeOfficials;
          this.event.supporters = timeSupporters;
          this.event.joint = timeJoint;
          this.event.staff = timeStaff;
          console.log('CG',this.event);

          this.render(this.ready);
        });
    }

    // render the data, when data is ready
    // sets the "ready to rendor" callback
    rendered(callback){
      this.ready = callback;
    }

    // send the final rendered dom element to callback
    // readyFunc : function(element)
    render(readyFunc){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      // const items = this.people.map( person => {
      //   let item = document.createElement('li');
      //   item.innerHTML = person.name;
      //   return item;
      // });

      // items.forEach( list.appendChild.bind(list) );

      view.appendChild(list);
      readyFunc(view);
    }

  }



  class COS {
    // prepare the data
    constructor(){
      // initial state
      this.event = [];

      // callback function to run after data is ready
      this.ready = placeholder => true;

      App.utils.Get('js/json/CG.json', (data) => {
          console.log('the data',data);
          const parsedCOS = JSON.parse(data);
          let totalTime = parsedCOS.items.map(element => {
            let start = element.start.dateTime.slice(11,16);
            let end = element.end.dateTime.slice(11,16);
            if(start.charAt(3) === '3') {
              start = parseInt(start.substring(0,2)) + .5;
            } else {
              start = parseInt(start.substring(0,2));
            }
            if(end.charAt(3) === '3') {
              end = parseFloat(end.substring(0,2)) + .5;
            } else {
              end = parseFloat(end.substring(0,2));
            }
            return (end - start);
          }).reduce((time,next)=> {
            return time +=next;
          },0)
          console.log('total',totalTime);


          this.event = parsedCOS.items;
          this.render(this.ready);
        });
    }

    // render the data, when data is ready
    // sets the "ready to rendor" callback
    rendered(callback){
      this.ready = callback;
    }

    // send the final rendered dom element to callback
    // readyFunc : function(element)
    render(readyFunc){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.people.map( person => {
        let item = document.createElement('li');
        item.innerHTML = person.name;
        return item;
      });

      items.forEach( list.appendChild.bind(list) );

      view.appendChild(list);
      readyFunc(view);
    }

  }

  class DCGAR {
    // prepare the data
    constructor(){
      // initial state
      this.event = [];

      // callback function to run after data is ready
      this.ready = placeholder => true;

      App.utils.Get('js/json/CG.json', (data) => {
          console.log('the data',data);
          const parsedDCGAR = JSON.parse(data);
          let totalTime = parsedDCGAR.items.map(element => {
            let start = element.start.dateTime.slice(11,16);
            let end = element.end.dateTime.slice(11,16);
            if(start.charAt(3) === '3') {
              start = parseInt(start.substring(0,2)) + .5;
            } else {
              start = parseInt(start.substring(0,2));
            }
            if(end.charAt(3) === '3') {
              end = parseFloat(end.substring(0,2)) + .5;
            } else {
              end = parseFloat(end.substring(0,2));
            }
            return (end - start);
          }).reduce((time,next)=> {
            return time +=next;
          },0)
          console.log('total',totalTime);


          this.event = parsedDCGAR.items;
          this.render(this.ready);
        });
    }

    // render the data, when data is ready
    // sets the "ready to rendor" callback
    rendered(callback){
      this.ready = callback;
    }

    // send the final rendered dom element to callback
    // readyFunc : function(element)
    render(readyFunc){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.people.map( person => {
        let item = document.createElement('li');
        item.innerHTML = person.name;
        return item;
      });

      items.forEach( list.appendChild.bind(list) );

      view.appendChild(list);
      readyFunc(view);
    }

  }

  class DCGN {
    // prepare the data
    constructor(){
      // initial state
      this.event = [];

      // callback function to run after data is ready
      this.ready = placeholder => true;

      App.utils.Get('js/json/CG.json', (data) => {
          console.log('the data',data);
          const parsedDCGN = JSON.parse(data);
          let totalTime = parsedDCGN.items.map(element => {
            let start = element.start.dateTime.slice(11,16);
            let end = element.end.dateTime.slice(11,16);
            if(start.charAt(3) === '3') {
              start = parseInt(start.substring(0,2)) + .5;
            } else {
              start = parseInt(start.substring(0,2));
            }
            if(end.charAt(3) === '3') {
              end = parseFloat(end.substring(0,2)) + .5;
            } else {
              end = parseFloat(end.substring(0,2));
            }
            return (end - start);
          }).reduce((time,next)=> {
            return time +=next;
          },0)
          console.log('total',totalTime);


          this.event = parsedDCGN.items;
          this.render(this.ready);
        });
    }

    // render the data, when data is ready
    // sets the "ready to rendor" callback
    rendered(callback){
      this.ready = callback;
    }

    // send the final rendered dom element to callback
    // readyFunc : function(element)
    render(readyFunc){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.people.map( person => {
        let item = document.createElement('li');
        item.innerHTML = person.name;
        return item;
      });

      items.forEach( list.appendChild.bind(list) );

      view.appendChild(list);
      readyFunc(view);
    }

  }

  class DCGNG {
    // prepare the data
    constructor(){
      // initial state
      this.event = [];

      // callback function to run after data is ready
      this.ready = placeholder => true;

      App.utils.Get('js/json/CG.json', (data) => {
          console.log('the data',data);
          const parsedDCGNG = JSON.parse(data);
          let totalTime = parsedDCGNG.items.map(element => {
            let start = element.start.dateTime.slice(11,16);
            let end = element.end.dateTime.slice(11,16);
            if(start.charAt(3) === '3') {
              start = parseInt(start.substring(0,2)) + .5;
            } else {
              start = parseInt(start.substring(0,2));
            }
            if(end.charAt(3) === '3') {
              end = parseFloat(end.substring(0,2)) + .5;
            } else {
              end = parseFloat(end.substring(0,2));
            }
            return (end - start);
          }).reduce((time,next)=> {
            return time +=next;
          },0)
          console.log('total',totalTime);


          this.event = parsedDCGNG.items;
          this.render(this.ready);
        });
    }

    // render the data, when data is ready
    // sets the "ready to rendor" callback
    rendered(callback){
      this.ready = callback;
    }

    // send the final rendered dom element to callback
    // readyFunc : function(element)
    render(readyFunc){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.people.map( person => {
        let item = document.createElement('li');
        item.innerHTML = person.name;
        return item;
      });

      items.forEach( list.appendChild.bind(list) );

      view.appendChild(list);
      readyFunc(view);
    }

  }

  class DCGS {
    // prepare the data
    constructor(){
      // initial state
      this.event = [];

      // callback function to run after data is ready
      this.ready = placeholder => true;

      App.utils.Get('js/json/CG.json', (data) => {
          console.log('the data',data);
          const parsedDCGS = JSON.parse(data);
          let totalTime = parsedDCGS.items.map(element => {
            let start = element.start.dateTime.slice(11,16);
            let end = element.end.dateTime.slice(11,16);
            if(start.charAt(3) === '3') {
              start = parseInt(start.substring(0,2)) + .5;
            } else {
              start = parseInt(start.substring(0,2));
            }
            if(end.charAt(3) === '3') {
              end = parseFloat(end.substring(0,2)) + .5;
            } else {
              end = parseFloat(end.substring(0,2));
            }
            return (end - start);
          }).reduce((time,next)=> {
            return time +=next;
          },0)
          console.log('total',totalTime);


          this.event = parsedDCGS.items;
          this.render(this.ready);
        });
    }

    // render the data, when data is ready
    // sets the "ready to rendor" callback
    rendered(callback){
      this.ready = callback;
    }

    // send the final rendered dom element to callback
    // readyFunc : function(element)
    render(readyFunc){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.people.map( person => {
        let item = document.createElement('li');
        item.innerHTML = person.name;
        return item;
      });

      items.forEach( list.appendChild.bind(list) );

      view.appendChild(list);
      readyFunc(view);
    }

  }

  class G3 {
    // prepare the data
    constructor(){
      // initial state
      this.event = [];

      // callback function to run after data is ready
      this.ready = placeholder => true;

      App.utils.Get('js/json/CG.json', (data) => {
          console.log('the data',data);
          const parsedG3 = JSON.parse(data);
          let totalTime = parsedG3.items.map(element => {
            let start = element.start.dateTime.slice(11,16);
            let end = element.end.dateTime.slice(11,16);
            if(start.charAt(3) === '3') {
              start = parseInt(start.substring(0,2)) + .5;
            } else {
              start = parseInt(start.substring(0,2));
            }
            if(end.charAt(3) === '3') {
              end = parseFloat(end.substring(0,2)) + .5;
            } else {
              end = parseFloat(end.substring(0,2));
            }
            return (end - start);
          }).reduce((time,next)=> {
            return time +=next;
          },0)
          console.log('total',totalTime);


          this.event = parsedG3.items;
          this.render(this.ready);
        });
    }

    // render the data, when data is ready
    // sets the "ready to rendor" callback
    rendered(callback){
      this.ready = callback;
    }

    // send the final rendered dom element to callback
    // readyFunc : function(element)
    render(readyFunc){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.people.map( person => {
        let item = document.createElement('li');
        item.innerHTML = person.name;
        return item;
      });

      items.forEach( list.appendChild.bind(list) );

      view.appendChild(list);
      readyFunc(view);
    }

  }

  window.app.states = {
    Default,
    CG,
    COS,
    DCGAR,
    DCGN,
    DCGNG,
    DCGS,
    G3
  };

}(window));