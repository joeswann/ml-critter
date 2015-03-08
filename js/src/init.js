'use strict'
import jQuery from 'jquery';

import Engine from './engine';

(($) => {
  window.$ = $;
  var engine = new Engine({
    _settings : {
      brain : {
        neurons : 100,
        synapses : 100
      },
      env : {
        obstructions : 10,
        avoiders : 10,
        finders  : 10
      } 
    }
  }); 
})(jQuery);
