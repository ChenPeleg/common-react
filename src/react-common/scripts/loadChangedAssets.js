import { Readable } from 'node:stream';
import { writeFile } from 'fs/promises';
import { existsSync, mkdirSync } from 'node:fs';

import {
    getLatestRelease, getLatestReleaseData,
    promptUserConsole,
    runUnZipper,
} from './getAssetsUtils.js';


const updateChangedLibrary = async () => {
    const releaseData = await getLatestReleaseData('ChenPeleg', 'common-react');

    // normalize the tag name to be a valid folder name
    const normelizedTagFoldeerName =
        releaseData.tag_name.replace(/[\\/:*?"<>|]/g, '_');
    const response = await getLatestRelease(releaseData);
    const body = Readable.fromWeb(response.body);
    !existsSync('temp') && mkdirSync('temp');
    !existsSync('temp/out') && mkdirSync('temp/out');
    const filePath =  'temp/updatedlib.zip' ;
    await writeFile(filePath, body);
    await runUnZipper('updatedlib.zip', 'temp', normelizedTagFoldeerName);
    const answer = await promptUserConsole('`common-react` was copied to `temp` folder. Do you want to' +
        ' move' +
        ' it to the `src`' +
        ' folder?' +
        ' (y/n) ')
    if (answer.trim().toLowerCase() === 'y') {
        !existsSync('src') && mkdirSync('src');
        !existsSync('src/react-common') && mkdirSync('src/react-common');
    }
};
 updateChangedLibrary().then();

