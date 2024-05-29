import { Popover } from '../library/popover/Popover.tsx';
import { AppButton } from '../shared/AppButton/AppButton.tsx';
import { MenuOption } from '../library/dropdown/MenuOption.ts';
import React from 'react';
import { AppDropdown } from '../library/dropdown/AppDropDown.tsx';

export const ExampleMenu = () => {
    const [selectedOption, setSelectedOption] =
        React.useState<MenuOption | null>(null);
    const options = [
        { label: 'Support', id: 'support' },
        { label: 'Account Settings', id: 'account-settings' },
        { label: 'Sign out', id: 'sign-out' },
    ];
    return (
        <div
            className={
                'flex h-96 w-3/4 flex-col items-center  justify-between rounded-lg bg-gray-100 p-8 shadow-lg'
            }
        >
            <Popover button={<AppButton>Show menu</AppButton>}>
                {(closePopover) => (
                    <div className={'  bg-white p-5'}>
                        <p className={'bg-white'}>
                            Please input a correct task in the input field
                        </p>

                        <button onClick={closePopover}>Close</button>
                    </div>
                )}
            </Popover>
            <div>
                <AppDropdown.Controlled
                    options={options}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
            </div>
        </div>
    );
};