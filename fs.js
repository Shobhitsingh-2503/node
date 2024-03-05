const {readFileSync,writeFileSync, write, writeFile} = require('fs');
// const fs = require('fs');

const first = readFileSync('./content/text.txt','utf-8');

console.log(first);

writeFileSync(
    './content/result.txt',
    `${first}`,
    {flag:'a'}
);
