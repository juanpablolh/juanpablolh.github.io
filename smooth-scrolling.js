/*!
 * Luxy.js v0.1.0: Inertia scroll and parallax effect plugin in Vanilla.js
 * (c) 2018 Mineo Okuda
 * MIT License
 * https://github.com/min30327/luxy.js
 */

(function(root, factory) {
    'use strict';
  
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define([], factory);
    }
    else if (typeof exports === 'object') {
      // COMMONJS
      module.exports = factory();
    }
    else {
      // BROWSER
      root.luxy = factory();
    }
  }(this, (function() {
  
    'use strict';
  
    // Default configuration options
    var defaults = {
      wrapper: '#luxy',
      targets: '.luxy-el',
      wrapperSpeed: 0.08,
      targetSpeed: 0.02,
      targetPercentage: 0.1
    };
  
    // ... (other code)
  
    /**
     * The Luxy class that provides smooth scrolling and parallax effects.
     * @constructor
     */
    var Luxy = function() {
      // ... (constructor code)
    };
  
    /**
     * Initializes Luxy with the provided options.
     * @param {Object} options - Configuration options.
     */
    Luxy.prototype.init = function(options) {
      // ... (init code)
    };
  
    /**
     * Attaches event listeners for resizing and scrolling.
     */
    Luxy.prototype.attachEvent = function() {
      // ... (event listener code)
    };
  
    // ... (other methods)
  
    var luxy = new Luxy();
  
    return luxy;
  })));
  
  