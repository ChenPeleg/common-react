import React from 'react';
import { AppButton } from '../shared/AppButton/AppButton.tsx';
import { Toast } from '../react-common/toast/Toast.tsx';

export const ExampleToast = () => {
    const [showToast, setShowToast] = React.useState(false);
    const content = <div>was saved succefully</div>;
    return (
        <div
            className={
                'flex h-96 w-3/4 flex-col items-center justify-center rounded-lg bg-gray-100 p-8 shadow-lg'
            }
        >
            <div className={'w-24'}>
                <AppButton onClick={() => setShowToast(!showToast)}>
                    show toast
                </AppButton>
            </div>

            <Toast
                show={showToast}
                setShow={setShowToast}
                className={'relative top-12  mx-auto  shadow-xl'}
            >
                {(closePopover) => (
                    <div className={' h-14 bg-white p-4 px-6'}>
                        <button
                            className={
                                'absolute right-1 top-1 h-5  w-5 rounded-full text-xs font-bold text-gray-500 hover:bg-gray-200  '
                            }
                            onClick={closePopover}
                        >
                            x
                        </button>
                        {content}
                    </div>
                )}
            </Toast>
        </div>
    );
};
