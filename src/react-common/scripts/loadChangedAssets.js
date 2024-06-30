#! /usr/bin/env node

import { Readable } from 'node:stream';
import { writeFile } from 'fs/promises';
import { existsSync, mkdirSync } from 'node:fs';


import {
    copyFolderRecursively, getLatestRelease,
    getLatestReleaseData,
    promptUserConsole,
    runUnZipper,
} from './getAssetsUtils.js';


const updateChangedLibrary = async () => {
    const releaseData = await getLatestReleaseData('ChenPeleg', 'common-react');

    // normalize the tag name to be a valid folder name
    const versionName = releaseData.tag_name.replace(/[\\/:*?"<>|]/g, '_');
    const response = await getLatestRelease(releaseData);
    const body = Readable.fromWeb(response.body);
    !existsSync('temp') && mkdirSync('temp');
    const filePath = 'temp/updatedlib.zip';
    await writeFile(filePath, body);
    await runUnZipper('updatedlib.zip', 'temp', 'temp');

    if (versionName) {
        // return;
    }
    const answer = await promptUserConsole( `"common-react" (${versionName}) was copied to
     "temp" folder. Do you want to  move  it to the "src"  folder? ` + ' (y/n) ');
    if (answer.trim().toLowerCase() === 'y'  ) {
        !existsSync('src') && mkdirSync('src');
        await copyFolderRecursively('temp/react-common', `src/react-common`);
    }
};
console.log('Loading the latest version of "common-react" library')
updateChangedLibrary().then();
