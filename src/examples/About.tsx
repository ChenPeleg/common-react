export const About = () => {
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


            <code className={'w-96 bg-black text-white rounded p-4 mt-10'}>


                npx common-react
            </code>
        </div>
        <div>
            This will create a new folder named "react-common" with all the components hooks and utils in your `src` folder. Then decide what to do with it, what to keep and what to delete.
        </div>


    </div>);

};
