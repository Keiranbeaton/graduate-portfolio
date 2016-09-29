'use strict';

module.exports = function(app) {
  require('./home')(app);
  require('./about')(app);
  require('./portfolio')(app);
  require('./projects')(app);
};
