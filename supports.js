(function() {
  var supports = {

    one: function(args) {
      if (!args.length) throw new Error('supports.one expects an array of tests');
      var tests = [];
      var i;
      for (i = 0; i < args.length; i++) {
        if (args[i] === 'each') break;
        if (this[args[i]] === undefined) throw new Error('Support test not found: ' + args[i]);
        tests.push(this[args[i]]);
      }
      return tests.some(function(el) {
        return el;
      });
    },

    each: function(args) {
      if (!args.length) throw new Error('supports.each expects an array of tests');
      var tests = [];
      var i;
      for (i = 0; i < args.length; i++) {
        if (args[i] === 'each') break;
        if (this[args[i]] === undefined) throw new Error('Support test not found: ' + args[i]);
        tests.push(this[args[i]]);
      }
      return tests.every(function(el) {
        return el;
      });
    },

    canvas: !!window.HTMLCanvasElement,

    classlist: 'classList' in document.documentElement,

    deviceMotion : ('DeviceMotionEvent' in window),

    deviceOrientation : ('DeviceOrientationEvent' in window),

    fetch: 'fetch' in window,

    filereader: !!window.FileReader,

    geolocation: 'geolocation' in navigator,

    history: 'pushState' in window.history,

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

    websqldatabase: 'openDatabase' in window,

    webworkers: 'Worker' in window,
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = supports;
  }
  else {
    window.supports = supports;
  }
})();