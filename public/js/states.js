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
      this.event = [];

      // callback function to run after data is ready
      this.ready = placeholder => true;

      this.sub = setInterval(() => {

        // execute an xhr request to http://swapi.co/api/people endpoint
        App.utils.Get('js/json/CG.json', (data) => {
          console.log('the data',data);
          const parsedCG = JSON.parse(data);
          let totalTime = parsedCG.items.map(element => {
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


          this.event = parsedCG.items;
          this.render(this.ready);
        });

      }, 1000);
    }

    // clean up when router leaves this state
    unmount(){
      clearInterval(this.sub);
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

  class Places {

    constructor(){
      this.places = [];
      this.ready = placeholder => true;

      this.sub = setInterval(() => {

        App.utils.Get('/api/planets', (data) => {
          this.places = JSON.parse(data);
          this.render(this.ready);
        });

      }, 1000);
    }

    unmount(){
      clearInterval(this.sub);
    }

    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.places.map( place => {
        let item = document.createElement('li');
        item.innerHTML = place.name;
        return item;
      });

      items.forEach( list.appendChild.bind(list) );

      view.appendChild(list);
      readyFunc(view);
    }

  }

  class Spaceships {

    constructor(){
      this.spaceships = [];
      this.ready = placeholder => true;

      this.sub = setInterval(() => {

        App.utils.Get('/api/starships', (data) => {
          this.spaceships = JSON.parse(data);
          this.render(this.ready);
        });

      }, 1000);
    }

    unmount(){
      clearInterval(this.sub);
    }

    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.spaceships.map( spaceship => {
        let item = document.createElement('li');
        item.innerHTML = spaceship.name;
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
    Places,
    Spaceships
  };

}(window));