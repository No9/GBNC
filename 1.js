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
 
var loremIpsum = require('lorem-ipsum');
var levelup = require('levelup');
var db = levelup('./db',
{valueEncoding: 'json'})
 
 
 
for (var i = 0; i < totalBatchFiles; i++) {
   var batch = [];
   for (var j = 0; j < totalDocsPerBatchFile; j++) {
      var value = {};
      var key = i + '~' + j;
         for (var k = 0; k < totalFieldsPerDoc; k++) {
            var fieldText = loremIpsum({
            count: totalSentencesPerField,
            units: 'sentences',
            sentenceLowerBound: 5,
            sentenceUpperBound: 15,
            paragraphLowerBound: 3,
            paragraphUpperBound: 7,
            format: 'plain',
            random: Math.random
   });

var fieldIndex = loremIpsum({
count: 1,
units: 'words',
format: 'plain',
random: Math.random
});
value[fieldIndex] = fieldText;
}
batch.push({
type: 'put',
key: key,
value: value});
console.log(key);
}
insertBatch(i, batch);
}
 
function insertBatch(id, thisBatch) {
console.log('queueing batch ' + id);
db.batch(thisBatch, function (err) {
console.log('inserted batch ' + id);
if (err) return console.log('Ooops!', err);
return;
});
}
