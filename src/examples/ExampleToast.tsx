import React from 'react';

import { Toast } from '../react-common/toast/Toast.tsx';
import { Popover } from '../react-common/popover/Popover.tsx';

export const ExampleToast = () => {
    const [showToast, setShowToast] = React.useState(false);
    const content = <div>was saved succefully</div>;
    return (

        <div
            className={'flex h-64 flex-col items-start justify-start  p-12 gap-4 '}
        >
            <p>
                This popover is a simple example of a popover component, based on the HTML
                <a className={'text-app-blue'}
                   href={'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover'}> popover element.</a>
            </p>
            <p className={'w-32'}>

                <Popover className={'relative   bg-red-200'} relativePosition={{}}>
                    {(closePopover) => (<div className={'  bg-white p-5 '}>
                            <p className={'bg-white'}>
                                I'm such an ugly popover... unstyled (yet)
                            </p>

                            <button onClick={closePopover}>Close</button>
                        </div>)}
                </Popover>
            </p>


            <div className={'w-24'}>
                <button onClick={() => setShowToast(!showToast)}>
                    show toast
                </button>
            </div>

            <Toast
                show={showToast}
                setShow={setShowToast}
                className={'relative top-12  mx-auto  shadow-xl'}
            >
                {(closePopover) => (<div className={' h-14 bg-white p-4 px-6'}>
                        <button
                            className={'absolute right-1 top-1 h-5  w-5 rounded-full text-xs font-bold text-gray-500 hover:bg-gray-200  '}
                            onClick={closePopover}
                        >
                            x
                        </button>
                        {content}
                    </div>)}
            </Toast>
        </div>);
};
