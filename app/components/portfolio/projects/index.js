'use strict';

module.exports = (app) => {
  require('./projects-controller')(app);
  require('./projects-directive')(app);
};
