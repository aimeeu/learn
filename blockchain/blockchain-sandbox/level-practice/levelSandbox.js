/* ===== Persist data with LevelDB ==================
|  Learn more: level: https://github.com/Level/level |
https://www.npmjs.com/package/level
/===================================================*/
// Importing the module 'level'
const level = require('level');
// create our database - supply location and options.
//    This will create or open the underlying LevelDB store.
const chainDB = './chaindata';
// Declaring a class
class LevelSandbox {
	// Declaring the class constructor
    constructor() {
    	this.db = level(chainDB);
    }
  
  	// Get data from levelDB with a key (Promise)
  	getLevelDBData(key){
        let self = this; // Because we are returning a promise, we will need this to be able to reference 'this' inside the Promise constructor
        return new Promise((resolve, reject) => {
            self.db.get(key, (err, value) => {
                if(err){
                    if (err.type === 'NotFoundError') {
                        resolve(undefined);
                    }else {
                        console.log('Block ' + key + ' get failed', err);
                        reject(err);
                    }
                }else {
                    resolve(value);
                }
            });
        });
    }
  
  	// Add data to levelDB with key and value (Promise)
    addLevelDBData(key, value) {
        let self = this;
        return new Promise((resolve, reject) => {
            self.db.put(key, value, function(err) {
                if (err) {
                    console.log('Block ' + key + ' submission failed', err);
                    reject(err);
                }
                resolve(value);
            });
        });
    }
  
  	// Implement this method
    // return count of keys in database
    getBlocksCount() {
        let self = this;
        let i = 0;
        // Add your code here
        return new Promise((resolve, reject) => {
            self.db.createKeyStream().on('data', (err) => {
                i++;
            }).on('error', function(err) {
                console.log('Unable to read data stream!', err);
                reject(err);
            }).on('close', function() {
                console.log('Block #' + i);
                resolve(i);
            });
        });
    };
}

// Export the class
module.exports.LevelSandbox = LevelSandbox;