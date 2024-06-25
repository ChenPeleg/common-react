import { MenuOption } from '../react-common/dropdown/MenuOption.ts';
import React from 'react';
import { AppDropdown } from '../react-common/dropdown/AppDropDown.tsx';

export const ExampleMenu = () => {
    const [selectedOption, setSelectedOption] = React.useState<MenuOption | null>(null);
    const options = [{
        label: 'Support',
        id: 'support',
    }, {
        label: 'Account Settings',
        id: 'account-settings',
    }, {
        label: 'Sign out',
        id: 'sign-out',
    }];
    return (

        <div
            className={'flex h-64 flex-col items-start justify-start  p-12 gap-4 '}
        >
            <p>
                This dropdown is a simple example of a dropdown menu component,  based on the HTML
                <a className={'text-app-blue'}
                   href={'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover'}> popover element.</a>
            </p>
            <div className={'z-50 w-64'}>
                    <AppDropdown.Controlled
                        config={{width: 200}}
                        options={options}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />

            </div>
        </div>);
};
