const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const pathRes = p => path.resolve(__dirname, p);

fs.copyFileSync(
    pathRes('../typings/vue-shim.d.ts'),
    pathRes('../dist/lib/tiv.d.ts'),
);

const newContent = fs.readFileSync(pathRes('../src/packages/tiv/index.ts'))
    .toString()
    .replace(/\.\.\//g, './');
fs.writeFileSync(pathRes('../dist/lib/index.d.ts'), newContent);

childProcess.spawn('cp', ['-r', 'src/packages', 'dist']);
