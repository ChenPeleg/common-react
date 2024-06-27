//  rename folder
import { renameSync, mkdirSync, existsSync,  readFileSync,writeFileSync ,readdirSync} from 'node:fs';
import { resolve } from 'node:path';
import { isDirectory } from './isDirectory.js';


export const renameFolder = (oldPath, newPath, createPathIfNeeded = true) => {
    try {
        if (!existsSync(resolve(newPath)) && createPathIfNeeded) {
            mkdirSync(resolve(newPath), { recursive: true });
        }
        renameSync(resolve(oldPath), resolve(newPath));
    } catch (e) {
        console.error(e);
    }
};


export const copyFolderRecursively = async (source, target) => {
    if (!existsSync(resolve(target))) {
        mkdirSync(resolve(target), { recursive: true });
    }
    const is = isDirectory('temp/react-common2');

  console.log('isDir', is)
    // const files = readdirSync(resolve(source));
    // for (const file of files) {
    //     const current = readFileSync(resolve(source, file));
    //     writeFileSync(resolve(target, file), current);
    // }
}
