import { SideNav } from '../shared/SideNav/SideNav.tsx';
import { NavLink, Outlet } from 'react-router-dom';
const exampleRouts = [
    {
        path: '/examples/applinksPanel',
        name: 'Applinks Panel',
    },
    {
        path: '/examples/dialog',
        name: 'Dialog',
    },
    {
        path: '/examples/form',
        name: 'Form',
    },
    {
        path: '/examples/table',
        name: 'Table',
    },
    {
        path: '/examples/popover',
        name: 'Popover',
    },
    {
        path: '/examples/menu',
        name: 'Menu',
    },
    {
        path: '/examples/toast',
        name: 'Toast',
    },
    {
        path: '/examples/toast-external',
        name: 'Toast External',
    },
];
export const ExamplePage = () => {
    return (
        <div
            id={'app-screen-base-layout'}
            className={'flex w-screen flex-col '}
        >
            <div id={'navbar-padding'} className={'h-14'}></div>
            <div className={'flex w-screen flex-row'}>
                <section className={' '}>
                    <SideNav>
                        <div className={'flex flex-col gap-3'}>
                            <div className={'h-2'}></div>
                            {exampleRouts.map((link) => (
                                <div
                                    key={link.name}
                                    className={'  w-full  pr-6 '}
                                >
                                    <NavLink
                                        className={({ isActive, isPending }) =>
                                            ' flex flex-row items-center justify-start   rounded-r-full  p-4 text-lg font-semibold hover:bg-gray-100 ' +
                                            (isPending
                                                ? 'pending'
                                                : isActive
                                                  ? 'bg-gradient-to-r from-app-blue   to-app-purple text-white hover:bg-gray-300'
                                                  : '')
                                        }
                                        to={`${link.path}`}
                                    >
                                        <div className={'pl-8'}>
                                            <span>{link.name}</span>
                                        </div>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </SideNav>
                </section>
                <Outlet />
            </div>
        </div>
    );
};
