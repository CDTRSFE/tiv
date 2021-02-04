const fs = require('fs');
const path = require('path');

const pathRes = p => path.resolve(__dirname, p);

fs.copyFileSync(
    pathRes('../typings/vue-shim.d.ts'),
    pathRes('../dist/lib/tiv.d.ts'),
);

const newContent = fs.readFileSync(pathRes('../src/packages/tiv/index.ts'))
    .toString()
    .replace('import \'./style.ts\';\n', '')
    .replace(/\.\.\//g, './');
fs.writeFileSync(pathRes('../dist/lib/index.d.ts'), newContent);

const libIndex = fs.readFileSync(pathRes('../dist/lib/index.js'))
    .toString()
    .replace('require(\'./style.ts\');\n', '')
    .replace(/\.\.\//g, './');
fs.writeFileSync(pathRes('../dist/lib/index.js'), libIndex);
