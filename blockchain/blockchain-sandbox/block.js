/* ===== Block Class ==============================
|  Class with a constructor for block 			   |
|  ===============================================*/
const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data){
        // Add your Block properties
        // Example: this.hash = "";
        this.id = 0;
        this.nonce = 144444;
        this.body = data;
        this.hash = "";
    };

    generateHash() {
        // Use this to create a temporary reference of the class object
        let self = this;
        return new Promise((resolve, reject) => {
            if (this.body){
                this.hash = SHA256(JSON.stringify(this)).toString();
                resolve (this);
            }else {
                reject('data is empty; cannot generate hash');
            }
        });
    };
}

module.exports.Block = Block;