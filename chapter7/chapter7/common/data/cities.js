var _ = require('underscore');

var places = {
  "nyc": "New York",
  "lon": "London"
};

exports.data = {
  keys: _.keys(places),
  cities: _.values(places).sort()
};
