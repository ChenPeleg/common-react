import { useToast } from '../react-common/toast/ToastProvider.tsx';

const CopySvg = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F0f0f0">
        <path
            d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
    </svg>);
};

export const About = () => {
    const toast = useToast();
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then();
        toast('copied to clipboard !', { duration: 2000,
        });

    };

    return (<div
        id={'app-screen-base-layout'}
        className={'flex w-full flex-col p-10 text-base'}
    >
        <div id={'navbar-padding'} className={'h-14 text-2xl font-bold'}>About</div>
        <div className={'flex flex-col  w-full  '}>
                <span>
                    This package is a collection of common React components and utilities that can be used in any React project.
                    <br />
                    <br />
                    The package is built using Tailwind CSS and TypeScript. It is designed to be easy to use and extendable.
                    <h1 className={'  text-2xl font-bold my-7'}>
                    <a href={'#dont-install-me'}>
                    Dont install me!</a></h1>

                        <span>
                            This package is not meant for installing! The main reason I created the package is to create a "vanilla" react component library.           </span>
                   <p>
                    Instead just use
                  </p>
                   </span>
        </div>
        <div className={'flex flex-col  w-full '}>


            <code className={'w-96 bg-black text-white rounded p-4 mt-10 flex flex-row gap-5 items-center'}>

                <button className={'rounded-full hover:bg-[#FFFFFF] hover:bg-opacity-30 p-2'} onClick={() => {
                    copyToClipboard('npx common-react');
                }}><CopySvg /></button>
                npx common-react
            </code>
        </div>
        <div>
            This will create a new folder named "react-common" with all the components hooks and utils in your `src` folder. Then decide
            what to do with it, what to keep and what to delete.
        </div>


    </div>);

};
