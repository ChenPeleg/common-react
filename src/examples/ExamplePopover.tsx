import { Popover } from '../react-common/popover/Popover.tsx';

export const ExamplePopover = () => {

    return (
        <div
            className={
                'flex h-64 flex-col items-start justify-start  p-12 gap-4 '
            }
        >
            <p>
                This popover is a simple example of a popover component, based on the HTML
                 <a className={'text-app-blue'} href={'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover'}> popover element.</a>
            </p>
            <p className={'w-32'}>

            <Popover className={'relative   bg-red-200'} relativePosition={{}}>
                {(closePopover) => (
                    <div className={'  bg-white p-5 '}>
                        <p className={'bg-white'}>
                           I'm such an ugly popover... unstyled (yet)
                        </p>

                        <button  onClick={closePopover}>Close</button>
                    </div>
                )}
            </Popover>
            </p>


        </div>
    );
};
