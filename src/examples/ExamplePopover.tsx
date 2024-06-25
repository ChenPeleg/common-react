import { Popover } from '../react-common/popover/Popover.tsx';


export const ExamplePopover = () => {

    return (
        <div
            className={
                'flex h-64 flex-col items-start justify-start  p-12 gap-4 '
            }
        >
            <div id={'navbar-padding'} className={'h-14 text-2xl font-bold'}>Popover</div>

            <p>
                This popover is a simple example of a popover component, based on the HTML
                <a className={'text-app-blue'} href={'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover'}> popover
                    element.</a>
            </p>
            <p className={'w-32'}>

                <Popover className={'relative   bg-red-200'} relativePosition={{}}
                         button={<div
                             className={' px-5 w-36 cursor-pointer  m-4 rounded  bg-pink-300 p-2 text-sm font-semibold shadow-sm '}> Show
                             popover</div>}>
                    {(closePopover) => (
                        <div className={'  bg-white p-5 '}>
                            <p className={'bg-white'}>
                                I'm such an ugly popover... unstyled (yet)
                            </p>

                            <button onClick={closePopover}>Close</button>
                        </div>
                    )}
                </Popover>
            </p>


        </div>
    );
};
