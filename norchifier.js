var fs = require('fs');
var _ = require('lodash');

var data = JSON.parse(fs.readFileSync('world-bank-projects.json'));

var padInt = function(intIn) {
  return ("000000000000000" + intIn).slice(-15);
}

var processDoc = function(datum) {
  datum['id'] = datum._id.$oid;
  delete datum._id;
  delete datum.projectdocs;
  delete datum.theme1;
  delete datum.majorsector_percent;
  delete datum.mjsector_namecode;
  delete datum.mjtheme_namecode;
  delete datum.sector;
  delete datum.sector_namecode;
  delete datum.sector1;
  delete datum.sector2;
  delete datum.theme_namecode;
  datum.totalamt = [padInt(datum.totalamt)];
  return datum;
};

fs.writeFileSync('world-bank-projects-norchified.json', JSON.stringify(_.map(data, processDoc), null, 2));

console.log('finished my lord');
