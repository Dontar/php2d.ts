/// <reference path="typings/index.d.ts" />

import * as FS from 'fs';
import * as PH from 'path';
import * as RL from 'readline';
import * as OS from 'os';

function readFile(path: string) {
    var theText = [`/* ${path} */`];

    var rint = RL.createInterface({
        input: FS.createReadStream(path)
    });
    var lastClass;
    rint.on('line', (line: string) => {
        var cls = line.match(/class\s+(\w+)/);
        if (cls) {
            if (lastClass) {
                theText.push('}');
            }
            lastClass = cls[1];
            theText.push('declare interface I' + lastClass + ' {');
        } else {
            var method = line.match(/^\s*(?:public)*\s+function\s+(\w+)\s*\((.*?)\)/);
            if (method) {
                if (method[1] != "__construct") {
                    theText.push(`    ${method[1]}(${method[2] ? (method[2].match(/(\$\w+)/g) || []).join(", ") + ',' : ''} cb: (result: any, e: any) => void, scope?: any): void;`);
                    // theText.push(`    ${method[1]}(${method[2] ? method[2] + ',' : ''} cb: (result: any, e: any) => void, scope?: any): void;`);
                }
            }
        }
    });
    rint.on('close', () => {
        if (theText.length > 1) {
            theText.push('}');
            theText.push(`declare var ${lastClass}: I${lastClass};`);
        }
        theText.push(OS.EOL);
        console.log(theText.join(OS.EOL));
    });
}

var path = process.argv.length > 2?process.argv[2]:".";
if (path) {
    FS.readdir(path, (err, files) => {
        files.forEach(element => {
            if (PH.extname(element) == '.php') {
                readFile(PH.join(path, element));
            }
        });
    });
}
