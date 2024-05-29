import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AppDialog } from '../shared/AppDialog/AppDialog.tsx';
import { AppButton } from '../shared/AppButton/AppButton.tsx';
import { TextInput } from '../shared/TextInput/TextInput.tsx';
import { validateEmail } from '../utils/validateEmail.ts';
import { useFormState } from '../library/hooks/useFormState.ts';
import { AppDropdown } from '../library/dropdown/AppDropDown.tsx';

export const ExampleFormComponent = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const [formState, setFormState] = useState<{
        isValid: boolean;
        isDirty: boolean;
        arePasswordsEqual: boolean;
        errors: string[];
    }>({
        isValid: false,
        isDirty: false,
        arePasswordsEqual: false,
        errors: [],
    });
    const formRef = React.useRef<HTMLFormElement>(null);
    const { values, setField } = useFormState(formRef, {
        initialValues: { fullName: 'Chen Peleg' },
    });

    const submitForm = () => {
        const errors: string[] = [];
        if (!values.fullName) {
            errors.push('Full name is required');
        }
        if (!validateEmail(formRef?.current?.username?.value)) {
            errors.push('Invalid address Email 2');
        }
        if (formState.isValid && !formState.arePasswordsEqual) {
            errors.push('Passwords are not equal 2');
        }
        if (errors.length) {
            setFormState((prevState) => {
                return {
                    ...prevState,
                    errors: errors,
                };
            });
            return;
        }
    };

    {
        const [badLoginDialogOpen, setBadLoginDialogOpen] = useState(false);

        const snap: unknown = {};
        const location = useLocation();

        console.log(values);

        // @ts-expect-error shit
        if (snap?.['isAuth']) {
            return (
                <Navigate
                    to={
                        location.state?.from
                            ? location.state.from.pathname
                            : '/'
                    }
                />
            );
        }

        return (
            <div className={'p-9'}>
                <div
                    data-testid="login-form"
                    id={'form-section-meta-container'}
                    className={
                        'flex h-max min-h-full w-full flex-col items-stretch'
                    }
                >
                    <div
                        id={'form-meta-container'}
                        className={
                            'flex h-max w-full grow flex-col items-center'
                        }
                        style={{ paddingTop: '12vh' }}
                    >
                        <div
                            id={'form-aligner-container'}
                            className={'self-center'}
                            style={{ width: '405px' }}
                        >
                            <form
                                ref={formRef}
                                id="login_form"
                                className=" flex flex-col self-center"
                            >
                                <div
                                    id={'field-container'}
                                    className="flex flex-col gap-3"
                                >
                                    <div className="grid h-16 grid-cols-2 gap-3">
                                        <TextInput
                                            className={
                                                'h-12 w-full min-w-full rounded-lg border border-gray-300  '
                                            }
                                            name="fullName"
                                            placeholder="Full Name"
                                        />
                                        <TextInput
                                            className={
                                                'h-12 w-full min-w-full rounded-lg border border-gray-300  '
                                            }
                                            name="username"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="grid h-16   grid-cols-2 gap-3">
                                        <TextInput
                                            className={
                                                'h-12 w-full min-w-full rounded-lg border border-gray-300  '
                                            }
                                            name="age"
                                            placeholder="Age"
                                        />
                                        <TextInput
                                            className={
                                                'h-12 w-full min-w-full rounded-lg border border-gray-300  '
                                            }
                                            name="nickname"
                                            placeholder="Nickname"
                                        />
                                    </div>
                                    <div className="grid h-16   grid-cols-2 gap-3">
                                        <AppDropdown.UnControlled
                                            options={[
                                                {
                                                    label: 'banana',
                                                    id: '12',
                                                    data: {},
                                                },
                                                {
                                                    label: 'apple',
                                                    id: '13',
                                                    data: {},
                                                },
                                                {
                                                    label: 'wwatermelon',
                                                    id: '14',
                                                    data: {},
                                                },
                                            ]}
                                            name={'fruit'}
                                            updateField={(ev) => {
                                                setField('fruit', ev.id);
                                            }}
                                            defaultValue={null}
                                        />

                                        <TextInput
                                            className={
                                                'h-12 w-full min-w-full rounded-lg border border-gray-300  '
                                            }
                                            name="nickname"
                                            placeholder="Nickname"
                                        />
                                    </div>
                                    <div className={'text-red-600'}>
                                        {formState.errors.map((error, i) => (
                                            <span key={error}>
                                                {error}
                                                {i + 1 <
                                                    formState.errors.length &&
                                                    ', '}
                                            </span>
                                        ))}
                                    </div>
                                    <div>
                                        {' '}
                                        By continuing, you agree to AppLinks's
                                        <a
                                            href={'terms-of-use'}
                                            className={
                                                'font-semibold underline'
                                            }
                                        >
                                            {' '}
                                            Terms of use
                                        </a>
                                        . Read our{' '}
                                        <a
                                            href={'privacy-policy'}
                                            className={
                                                'font-semibold underline'
                                            }
                                        >
                                            {' '}
                                            Privacy Policy
                                        </a>{' '}
                                    </div>

                                    <span
                                        className="h-16"
                                        data-testid={'login-button'}
                                    >
                                        <AppButton
                                            onClick={submitForm}
                                            type="button"
                                            disabled={!formState.isValid}
                                            className={'h-12'}
                                        >
                                            Sign Up
                                        </AppButton>
                                    </span>
                                </div>
                                <div
                                    className={
                                        'flex   flex-row items-center justify-center '
                                    }
                                >
                                    Already have an account?{' '}
                                    <span> &nbsp;</span>
                                    <a
                                        href={'login'}
                                        className={
                                            'font-semibold text-blue-700 underline'
                                        }
                                    >
                                        {' '}
                                        Login
                                    </a>
                                </div>
                            </form>

                            <div />
                        </div>
                    </div>
                </div>
                <div />;
                <AppDialog
                    isOpen={badLoginDialogOpen}
                    setIsOpen={setBadLoginDialogOpen}
                    trueText="Got it"
                    falseText="Exit"
                    title="Login Failed"
                    onTrue={() => setBadLoginDialogOpen(false)}
                >
                    User or password are incorrect
                </AppDialog>
                ;
            </div>
        );
    }
};
