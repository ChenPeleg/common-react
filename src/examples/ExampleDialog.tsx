import React from 'react';
import { DialogModal } from '../react-common/dialog/DialogModal.tsx';


export const ExampleDialog = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [warningSaveRecord, setWarningSaveRecord] = React.useState(false);


    return (
        <div className={'p-8'}>
            <button
                className={
                    'w-22  m-4 rounded  bg-pink-300 p-2 text-sm font-semibold shadow-sm'
                }
                onClick={() => setShowModal(true)}
            >
                Show dialog modal
            </button>
            <button
                className={
                    'w-22  m-4 rounded  bg-pink-300 p-2 text-sm font-semibold shadow-sm'
                }
                onClick={() => setShowModal(true)}
            >
                Show AppDialog
            </button>
            <DialogModal
                showDialog={warningSaveRecord}
                setShowDialog={setWarningSaveRecord}

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
                            className="mx-auto max-w-md rounded-md bg-white p-6"
                        >
                            <div className="pb-3">{'icon'}</div>
                            <div id="dialog-title" className="text-2xl font-medium">
                                {'title'}
                            </div>
                            <div
                                id="dialog-description"
                                className="text-app-grey-10 w-96 pb-5"
                            >
                                {'children'}
                            </div>
                            <div className="-mx-6 my-2 h-2 pb-3">
                                <hr />
                            </div>
                            <div className="flex w-full flex-row justify-end gap-2">

                                    <span>
                                    <button className={'globals-app-button h-9 py-1.5'}
                                            onClick={() => setWarningSaveRecord(false)}>



                                        close
                                    </button>
                                </span>
                                )
                                <div className="w-24">
                                    <button
                                        className={'h-9 py-1.5'}
                                        onClick={() => {
                                            setWarningSaveRecord(false);
                                            setShowModal(false);
                                        }}
                                    >
                                        {'trueText'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogModal>

            <DialogModal setShowDialog={setShowModal} showDialog={showModal}>
                <div className={'border-2 border-blue-400 bg-white p-5'}>
                    <p className={'bg-white'}>
                        Please input a correct task in the input field
                    </p>
                    <button onClick={() => setShowModal(false)}>Close</button>
                </div>
            </DialogModal>
        </div>
    );
};
