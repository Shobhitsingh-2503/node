const os = require('os');

console.log(`Version of your OS : ${os.release()}`);
console.log(`Free mem is : ${os.freemem()}`);
console.log(`Total mem is : ${os.totalmem}`);