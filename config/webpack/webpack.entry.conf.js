const entryBuild = require('../entry/entry');
let entry = {};
entryBuild.map((data) => {
    entry[data.name] = ['./entryBuild/' + data.name + '.js', data.title];
});
console.log(entry);
module.exports = entry;