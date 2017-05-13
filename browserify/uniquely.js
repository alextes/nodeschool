const uniq = require('uniq');

module.exports = function (val) { return uniq(val.split(',')); };
