'use strict';

module.exports = (app) => {
  require('./projects')(app);
  require('./portfolio-controller')(app);
  require('./portfolio-directive')(app);
};
