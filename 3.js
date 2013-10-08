module.exports = function() {
   require('./I_AM_GOING_TO_BE_SYNC')
}


// In an up stream module....
var syncmodule = require('moduleabove')

for(var i=0; i < 10; i++) {
   syncmodule();
}
