const filteredLsModule = require('./filtered-ls-module');

const pathToSearch = process.argv[2];
const ext = process.argv[3];

filteredLsModule(pathToSearch, ext, (err, files) => {
  if (err) { console.log('err! ', err); }
  files.forEach((file) => { console.log(file); });
});
