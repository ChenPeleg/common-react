import React from 'react';
import { DialogModal } from '../react-common/dialog/DialogModal.tsx';



export const ExampleDialog = () => {
    const [showModal, setShowModal] = React.useState(false);


    return (

        <div
            className={
                'flex h-64 flex-col items-start justify-start  p-12 gap-4 '
            }
        >
            <p>
                This dialog is a simple example of a dialog component, based on the HTML
                <a className={'text-app-blue'} href={'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog'}> dialog
                    element.</a>
            </p>
            <p className={'w-52'}>
                <button
                    className={
                        'w-22  m-4 rounded  bg-pink-300 p-2 text-sm font-semibold shadow-sm'
                    }
                    onClick={() => setShowModal(true)}
                >
                    Show dialog modal
                </button>

                <DialogModal

                    showDialog={showModal}
                    setShowDialog={setShowModal}

                >
                    <div
                        className="bg-alblue-400/60 fixed inset-0"
                        aria-hidden="true"
                    />

                    {/* Full-screen scrollable container */}
                    <div className="fixed inset-0 overflow-y-auto">
                        {/* Container to center the panel */}
                        <div className="flex min-h-full items-center justify-center p-4">
                            {/* The actual dialog panel  */}
                            <div
                                id={'dialog'}
                                className="mx-auto max-w-md rounded-md bg-white p-6 flex flex-col gap-4 shadow-lg"
                            >

                                <div id="dialog-title" className="text-2xl font-medium">
                                  This is my modal dialog
                                </div>


                                <div className="flex w-full flex-row justify-end gap-2">

                                    <span>
                                    <button className={'globals-app-button h-9 py-1.5'}
                                            onClick={() => setShowModal(false)}>

                                        close
                                    </button>
                                </span>


                                </div>
                            </div>
                        </div>
                    </div>
                </DialogModal>
            </p>


        </div>


    );
};
