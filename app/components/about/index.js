'use strict';

module.exports = (app) => {
  require('./about-controller')(app);
  require('./about-directive')(app);
};
