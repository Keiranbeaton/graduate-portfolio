'use strict';

module.exports = (app) =>{
  require('./home')(app);
  require('./about')(app);
  // require('./portfolio')(app);
  // require('./projects')(app);
};
