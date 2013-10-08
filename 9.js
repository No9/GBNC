//fergusmcdowall@gmail.com
//A very simple stress test for levelUP
//make lots of LorumIpsum json files, put them into batches, and then
//cram as many of them as possible into LevelUP
 
//At the time of writing (15 aug 2013) this will create a memory leak
 
//adjust size of batches here
var totalBatchFiles = 300;
var totalDocsPerBatchFile = 100;
var totalFieldsPerDoc = 10;
var totalSentencesPerField = 50;
var crypto = require('crypto')
var levelup = require('level');
var db = levelup('./db',
{valueEncoding: 'json'})
 
var batches = 0
var inserted = 0
var queued = 0
 
 
function doBatch () {
var batch = [];
for (var j = 0; j < totalDocsPerBatchFile; j++) {
var value = {};
var key = batches + '~' + j;
for (var k = 0; k < totalFieldsPerDoc; k++) {
var fieldText = crypto.randomBytes(3400).toString('hex')
var fieldIndex = crypto.randomBytes(10).toString('hex')
value[fieldIndex] = fieldText;
}
 
batch.push({
type: 'put',
key: key,
value: value});
//console.log(key);
}
insertBatch(batches, batch);
if (++batches < totalBatchFiles)
setImmediate(doBatch)
}
db.on('ready', doBatch)
 
setInterval(function () {
console.log("Queued : ",  queued, "Inserted : ", inserted, "Total Puts : ", inserted * totalDocsPerBatchFile, process.memoryUsage())
}, 5000)
 
function insertBatch(id, thisBatch) {
queued++
//console.log('queueing batch ' + id);
db.batch(thisBatch, function (err) {
queued--
inserted++
//console.log('inserted batch ' + id);
if (err) return console.log('Ooops!', err);
return;
});
}
