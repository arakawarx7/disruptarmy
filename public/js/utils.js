(function(window) {
  // namespacing
  window.app = window.app || {};

  // url : string
  // callback : function(data)
  const Get = (url, callback) => {
    // create new XHR object
    let oReq = new XMLHttpRequest();

    // attach events: 'load', 'error'
    oReq.addEventListener('progress', function(){
      // do nothing for now
    });
    oReq.addEventListener('load', function(){
      callback(this.responseText);
    });
    oReq.addEventListener('error', function(){
      console.log('ERROR Loading data from', url);
    });

    // first arg: METHOD, second arg: URL
    oReq.open('GET', url);
    // HEADERS GO HERE
    oReq.setRequestHeader('Accept', 'application/json');
    // fire off the request
    oReq.send();
  };

  const totalTimes = (array)=>{
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

  window.app.utils = {
    Get,
    totalTimes
  };

}(window));