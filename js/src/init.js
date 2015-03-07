'use strict'

import jQuery from 'jquery';

import Main from './main';

(($) => {
  window.$ = $;
  var main = new Main(); 
})(jQuery);
