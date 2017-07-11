'use strict';

module.exports = function(Link) {

  Link.validatesLengthOf('mdContent', {
    min: 3,
  });

};
