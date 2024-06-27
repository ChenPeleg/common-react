//  rename folder
import { renameSync, mkdirSync, existsSync, readDir,readFileSync,writeFileSync} from 'node:fs';
import { resolve } from 'node:path';


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
    const files = readDir(resolve(source));
    for (const file of files) {
        const current = readFileSync(resolve(source, file));
        writeFileSync(resolve(target, file), current);
    }
}
