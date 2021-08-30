/* ===== SHA256 with Crypto-js ===================================
|  Learn more: Crypto-js: https://github.com/brix/crypto-js      |
|  =============================================================*/

const SHA256 = require('crypto-js/sha256');


/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/
class Block{
	constructor(data){
      this.height = '';
      this.timeStamp = '';
      this.data = data;
      this.previousBlockHash = '';
      this.hash = '';
  }
}

/* ===== Blockchain ===================================
|  Class with a constructor for blockchain data model  |
|  with functions to support:                          |
|     - createGenesisBlock()                           |
|     - getLatestBlock()                               |
|     - addBlock()                                     |
|     - getBlock()                                     |
|     - validateBlock()                                |
|     - validateChain()                                |
|  ====================================================*/
class Blockchain {
  constructor() {
      this.chain = [];    
      this.addBlock(new Block('First block in the chain - Genesis block'));
  }
  addBlock(newBlock) {
    newBlock.height = this.chain.length;
    newBlock.timeStamp = new Date().getTime().toString().slice(0,-3);
    if (this.chain.length > 0) {
      newBlock.previousBlockHash = this.chain[this.chain.length-1].hash;
    }
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    this.chain.push(newBlock);
  }
}

