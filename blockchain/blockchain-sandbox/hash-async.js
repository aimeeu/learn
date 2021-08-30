
const BlockClass = require('./block.js');

var myBlock = new BlockClass.Block("Test Block");

// Generating the block hash - positive case
myBlock.generateHash().then((result) => {
    console.log("positive hash test");
    let self = this;
    console.log(JSON.stringify(result, undefined, 2));
    console.log(`Block Hash: ${result.hash}`);
}).catch((error) => {
    console.log(error);
});

// error case
myBlock = new BlockClass.Block();
myBlock.generateHash().then((result) => {
    let self = this;
    console.log(JSON.stringify(result, undefined, 2));
    console.log(`Block Hash: ${result.hash}`);
}).catch((error) => {
    console.log('error hash test');
    console.log(error);
});

