import { AppTable, AppTableProps } from '../ui/table/AppTable.tsx';
import React from 'react';
import { useFormState } from '../library/hooks/useFormState.ts';
import { TextInput } from '../shared/TextInput/TextInput.tsx';
import { Icons } from '../assets/icons/Icons.tsx';
import { useI18n } from '../i18n/i18n.tsx';

const appNames = [
    'animals',
    'arabic',
    'house',
    'fruits',
    'animals',
    'birds',
    'colors',
    'numbers',
    'shapes',
    'vegetables',
    'vehicles',
    'weather',
    'animals',
    'birds',
    'colors',
    'numbers',
    'shapes',
    'vegetables',
];

const rowsData: Record<string, any>[] = appNames.map((name, index) => ({
    id: `app_table_row_id${index}`,
    appName: `${index & 1 ? 'Memory' : 'Shooter'} ${name}`,
    appId: `app${Math.random().toString(36).slice(2, 9)}${index}`,
    description: 'App description',
    appUrl: `https://www.apps-links.app/${Math.random()
        .toString(36)
        .slice(2, 9)}${index}`,
    numberOfUsers: 100,
    health: 'good',
}));
const tableProps: AppTableProps = {
    openRow: null,
    setOpenRow: () => {},
    rowsData: rowsData,
    columns: [
        {
            name: 'App name',
            key: 'appName',
        },
        {
            name: 'App id',
            key: 'appId',
        },
        {
            name: 'App description',
            key: 'description',
        },
        {
            name: 'App url',
            key: 'appUrl',
        },
        {
            name: 'Number of users',
            key: 'numberOfUsers',
        },
        {
            name: 'Health',
            key: 'health',
        },
    ],
    rowAction: () => {},
};

const EditAppForm = ({
    rowData,
    formAction,
}: {
    rowData: Record<string, any>;
    formAction: (action: 'delete' | 'save', data: any) => void;
}) => {
    const formRef = React.useRef<HTMLFormElement>(null);
    const { values } = useFormState(formRef, { initialValues: rowData });
    const { t } = useI18n();
    return (
        <div className={'  h-full w-full   px-4 pt-2'}>
            <h2 className={'pb-2  '}>Edit App</h2>
            <form
                // key={randKey}
                ref={formRef}
                className={'flex h-full flex-col  '}
                data-values={values}
            >
                <div className={'flex h-full  flex-col justify-between   '}>
                    <div className={'flex  flex-col  gap-3'}>
                        <div className={'flex flex-row gap-3'}>
                            <div className={'w-60'}>
                                <TextInput
                                    className={
                                        'h-8 w-full min-w-full rounded border border-gray-300  '
                                    }
                                    name="appName"
                                    id="appName"
                                    placeholder="App Name"
                                />
                            </div>
                            <div className={'w-60'}>
                                <TextInput
                                    className={
                                        'h-8 w-full min-w-full rounded border border-gray-300  '
                                    }
                                    name="appId"
                                    id="appId"
                                    placeholder="App Id"
                                />
                            </div>
                        </div>
                        <div>
                            <div className={'w-3/4'}>
                                <TextInput
                                    className={
                                        'h-8 w-full min-w-full rounded border border-gray-300  '
                                    }
                                    id="description"
                                    name="description"
                                    placeholder="Description"
                                />
                            </div>
                        </div>
                        <div>
                            <div className={'w-3/4'}>
                                <TextInput
                                    className={
                                        'h-8 w-full min-w-full rounded border border-gray-300  '
                                    }
                                    id="appUrl"
                                    name="appUrl"
                                    placeholder="App Url"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            'flex  h-20 w-full flex-col   justify-end   py-4'
                        }
                    >
                        <div className={'flex flex-row gap-4'}>
                            <button
                                onClick={() => formAction('save', values)}
                                type={'button'}
                                className={
                                    'flex flex-row items-center gap-2 rounded-sm bg-blue-50 px-2 py-1  transition-colors duration-100 ease-in-out hover:bg-blue-100   '
                                }
                            >
                                <Icons.Save className={'h-5 w-5'} />
                                <span>Save</span>
                            </button>
                            <button
                                type={'button'}
                                className={
                                    'flex flex-row items-center gap-2 rounded-sm bg-blue-50 px-2 py-1  transition-colors duration-100 ease-in-out hover:bg-blue-100   '
                                }
                            >
                                <Icons.Delete className={'h-5 w-5'} />
                                <span>{t('Delete')}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
export const ExampleTable = () => {
    const [openRow, setOpenRow] = React.useState<string | null>(null);
    const rowAction = (data: Record<string, any>, actionType: string) => {
        switch (actionType) {
            case 'openRow':
                setOpenRow(data.id);
                return;
            case 'closeRow':
                setOpenRow(null);
                return;
            default:
                break;
        }
    };

    return (
        <div className={'w-full bg-gray-50'}>
            <div className={'h-10'}></div>
            <AppTable
                openRow={null}
                setOpenRow={() => {}}
                columns={tableProps.columns}
                rowsData={tableProps.rowsData}
                rowAction={rowAction}
                componentExpandRow={
                    <EditAppForm
                        rowData={
                            tableProps.rowsData.find(
                                (r) => r.id === openRow
                            ) as Record<string, any>
                        }
                        formAction={(action, data) => {
                            console.info(action, data);
                        }}
                    />
                }
            />
        </div>
    );
};
