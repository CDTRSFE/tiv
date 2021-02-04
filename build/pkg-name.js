const path = require('path');
const fs = require('fs');

// 非组件
const notCom = /utils|tiv/;

const pkgPath = path.resolve(__dirname, '../src/packages');
const pkgNames = [];
const comNames = [];
fs.readdirSync(pkgPath).forEach(name => {
    pkgNames.push(name);
    if (!notCom.test(name)) comNames.push(name);
});

module.exports = {
    pkgNames,
    comNames,
};
