import { Readable } from 'node:stream';
import { writeFile } from 'fs/promises';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { platform } from 'node:os';
import { exec } from 'child_process';




const getLatestReleaseURL = async (owner, repo) => {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`);
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    return await response.json();
};



const getLatestRelease  = (owner, repo) =>
    getLatestReleaseURL(owner, repo)
    .then(release => {
        const asset = release.assets[0];
        console.log('from' , asset.browser_download_url)
        return fetch(asset.browser_download_url );
    })
    .catch(console.error);


const execPromise = async (command, extraParams = {}) => {
    return new Promise(function (resolve, reject) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        exec(command, extraParams, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(stdout.trim());
        });
    });
};
export const runUnZipper = async (
    fileName = "workbook",
    tempDir = "temp",
    outDir = "out"
) => {
    if (platform() === "win32") {
        const psCommand = `Expand-Archive -Path ${resolve(
            tempDir)}/${fileName} -DestinationPath out`;
         await execPromise(psCommand, {
            cwd: tempDir,
            shell: "powershell.exe",
        });
    } else {
        const psCommand = `cd ${resolve(tempDir)} && zip -r ${resolve(
            outDir
        )}/${fileName}.zip ./*`;
        const res = await execPromise(psCommand);
        console.log(res);
    }

};


const updateChangedLibrary = async () => {
    //const url =
    // `https://github.com/ChenPeleg/applinks-client/archive/refs/tags/v0.18.zip`;
    // const releaseUrl = `https://github.com/ChenPeleg/applinks-client/releases/latest`;

    const response = await getLatestRelease('ChenPeleg', 'common-react');
    const body = Readable.fromWeb(response.body);

    !existsSync('temp') && mkdirSync('temp');
    !existsSync('temp/out') && mkdirSync('temp/out');
    const filePath =  'temp/updatedlib.zip' ;
    await writeFile(filePath, body);
    await runUnZipper('updatedlib.zip', 'temp', 'out');
};
updateChangedLibrary().then();
