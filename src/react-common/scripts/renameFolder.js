// move/rename folder
import { renameSync,mkdirSync } from 'node:fs';
import { resolve } from 'node:path';


export const renameFolder = (oldPath, newPath, createPathIfNeeded = true) => {
    try {
        if (createPathIfNeeded) {
            mkdirSync(resolve(newPath), { recursive: true });
        }
        renameSync(resolve(oldPath), resolve(newPath));
    } catch (e) {
        console.error(e);
    }
};
