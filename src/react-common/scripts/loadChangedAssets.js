import { Readable } from 'node:stream';
import { writeFile } from 'fs/promises';
import { existsSync, mkdirSync } from 'node:fs';

import { getLatestRelease, promptUserConsole, runUnZipper } from './getAssetsUtils.js';


const updateChangedLibrary = async () => {

    const response = await getLatestRelease('ChenPeleg', 'common-react');
    const body = Readable.fromWeb(response.body);
    !existsSync('temp') && mkdirSync('temp');
    !existsSync('temp/out') && mkdirSync('temp/out');
    const filePath =  'temp/updatedlib.zip' ;
    await writeFile(filePath, body);
    await runUnZipper('updatedlib.zip', 'temp', 'out');
    const anwer = await promptUserConsole('Do you want to update the library? (y/n)');
};
 updateChangedLibrary().then();

