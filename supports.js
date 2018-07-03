(function() {
  var checkArgs = function(testType, args) {
    if (!args.length || !Array.isArray(args)) throw new Error('supports.' + testType + '() expects an array');
    var tests = [];
    var i;
    for (i = 0; i < args.length; i++) {
      if (args[i] === 'each' || args[i] === 'one') break;
      if (supports[args[i]] === undefined) throw new Error('supports.' + testType + '() could not find property \'' + args[i]+ '\'');
      tests.push(supports[args[i]]);
    }
    return tests[testType](function(el) {
      return el;
    });
  };

  var supports = {

    some: function(args) {
      return checkArgs('some', args);
    },

    every: function(args) {
      return checkArgs('every', args);      
    },

    classlist: 'classList' in document.documentElement,

    deviceMotion : ('DeviceMotionEvent' in window),

    deviceOrientation : ('DeviceOrientationEvent' in window),

    fetch: 'fetch' in window,

    filereader: !!window.FileReader,

    geolocation: 'geolocation' in navigator,

    history: 'pushState' in window.history,

    intl: 'Intl' in window,

    matchmedia: !!('matchMedia' in window || 'msMatchMedia' in window),

    serviceworkers: (function() {
      return 'serviceWorker' in navigator;
    })(),
    
    touchevents: !!(
      ('ontouchstart' in window) ||
      window.navigator && window.navigator.msPointerEnabled && window.MSGesture ||
      window.DocumentTouch && document instanceof DocumentTouch
    ),

    webgl: (function() {
      var canvas = document.createElement('canvas');
      var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      return !!(gl && gl instanceof WebGLRenderingContext);
    })(),

    webgl2: (function() {
      var canvas = document.createElement('canvas');
      return !!canvas.getContext('webgl2');
    })(),

    webworkers: 'Worker' in window,
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = supports;
  }
  else {
    window.supports = supports;
  }
})();