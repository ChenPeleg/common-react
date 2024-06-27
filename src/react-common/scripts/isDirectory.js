import  {lstatSync} from 'node:fs';

export const isDirectory = (path) => {
    try {
        return  lstatSync(path)
            ?  lstatSync(path).isDirectory() : false;
    } catch (e) {
        console.log(e)
        return false
    }
}
