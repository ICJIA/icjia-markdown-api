'use strict';

module.exports = function(Link) {


  // mdContent must be at least 3 characters
  Link.validatesLengthOf('mdContent', {
    min: 3,
  });

  // permalink must be unique
  Link.validatesUniquenessOf('permalink')

  

};
