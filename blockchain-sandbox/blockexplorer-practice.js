/* Using BlockExplorer API to search Block Data */
// require the module
const be = require('blockexplorer');

// Explore Block Data function
function getBlock(index) {
    //Add your code here
    // Start by requesting the hash
    be.blockIndex(index)
        .then((result) => {
            console.log('result of be.blockIndex ', JSON.stringify(result, undefined, 2));
            let hash = JSON.parse(result).blockHash;
            console.log('hash', hash);
            return be.block(hash);
        })
        .then((result) => {
            //process result from be.block
            console.log('result of be.block ', JSON.stringify(result, undefined, 2));
            let blockObj = JSON.parse(result);
            if (blockObj.height === 2) {
                console.log('merkleroot ', blockObj.merkleroot);
                console.log('previousHash ', blockObj.previousblockhash);
            }
        })
        .catch((err) => {
            throw err
        })

    // Then, request the block and use console.log.
    // get the genesis block hash
}

(function theLoop (i) {
    setTimeout(function () {
        getBlock(i);
        i++;
        if (i < 3) theLoop(i);
    }, 3600);
})(0);