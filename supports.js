window.supports = {

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

  fetch: 'fetch' in window,

  geolocation: 'geolocation' in navigator,

  localstorage: (function() {
    var sjs = 'Supports.js';
    try {
      localStorage.setItem(sjs, sjs);
      localStorage.removeItem(sjs);
      return true;
    } catch (e) {
      return false;
    }
  })(),

  matchmedia: !!('matchMedia' in window || 'msMatchMedia' in window),

  queryselectorall: !!document.querySelectorAll,

  sessionstorage: (function() {
    var sjs = 'Supports.js';
    try {
      sessionStorage.setItem(sjs, sjs);
      sessionStorage.removeItem(sjs);
      return true;
    } catch (e) {
      return false;
    }
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

  websqldatabase: 'openDatabase' in window,

  webworkers: 'Worker' in window,
};