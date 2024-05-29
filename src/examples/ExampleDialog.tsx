import React from 'react';
import { DialogModal } from '../react-common/dialog/DialogModal.tsx';
import { AppDialog } from '../shared/AppDialog/AppDialog.tsx';
import { useI18n } from '../i18n/i18n.tsx';

export const ExampleDialog = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [warningSaveRecord, setWarningSaveRecord] = React.useState(false);
    const { t } = useI18n();

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
            <AppDialog
                isOpen={warningSaveRecord}
                setIsOpen={setWarningSaveRecord}
                trueText={t('Got it')}
                falseText={t('Exit')}
                title={t('Login Failed')}
                onTrue={() => setWarningSaveRecord(false)}
            >
                {t('User or password are incorrect')}
            </AppDialog>

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
