import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const exampleRouts = [{
    path: '/examples/applinksPanel',
    name: 'Applinks Panel',
}, {
    path: '/examples/dialog',
    name: 'Dialog',
}, {
    path: '/examples/form',
    name: 'Form',
}, {
    path: '/examples/table',
    name: 'Table',
}, {
    path: '/examples/popover',
    name: 'Popover',
}, {
    path: '/examples/menu',
    name: 'Menu',
}, {
    path: '/examples/toast',
    name: 'Toast',
}, {
    path: '/examples/toast-external',
    name: 'Toast External',
}];

export const Site = () => {
    const navigate = useNavigate();
    return <div className={'w-screen h-screen'} id={'site-root'}>
        <div
            id={'nav-bar-surface'}
            className={' h-14  bg-white shadow-md  '}
        >
            <div
                id={'nav-bar-content-wrapper'}
                className={'flex h-full w-full flex-row justify-between'}
            >
                <div
                    id={'navbar-content-links'}
                    className={'ml-2 flex h-full w-full flex-row justify-between sm:ml-5 '}
                >
                    <NavLink className={'hidden sm:flex'} to={'/'}>
                        <div
                            id={'navbar-left'}
                            className={'flex  h-full flex-row   items-center hover:text-gray-400'}
                        >
                            appLogo
                        </div>
                    </NavLink>
                    <NavLink className={'mr-1 flex sm:hidden'} to={'/'}>
                        <div
                            id={'navbar-left'}
                            className={'flex  h-full flex-row   items-center hover:text-gray-400'}
                        >

                        </div>
                    </NavLink>

                    <div
                        id={'nav-links-mobile'}
                        className={' flex  flex-row items-center justify-center gap-4 sm:hidden'}
                    >
                        <select

                            onChange={(event) => navigate(event.target.value)}
                        >
                            {exampleRouts.map((link) => (<option key={link.name} value={link.path}>
                                    {link.name}
                                </option>))}
                        </select>
                    </div>
                </div>
                <div
                    id={'navbar-content-users'}
                    className={'mr-5 flex h-full w-full flex-row justify-end '}
                >
                    <div
                        className={'w-30 flex h-full cursor-pointer flex-row items-center gap-1 p-2'}
                    >

                    </div>
                    <div className={'h-5 w-4'}></div>

                    <div
                        id={'spacer'}
                        className={'hidden h-5 w-4 sm:block'}
                    ></div>
                </div>
            </div>
        </div>
        <main>
            <h1 className={'text-2xl '}>
                Common React components and hooks
            </h1>
        </main>


        <div
            id={'app-screen-base-layout'}
            className={'flex w-screen flex-col '}
        >
            <div id={'navbar-padding'} className={'h-14'}></div>
            <div className={'flex w-screen flex-row'}>
                <section className={' '}>
                    <nav>
                        <div className={'flex flex-col gap-3'}>
                            <div className={'h-2'}></div>
                            {exampleRouts.map((link) => (<div
                                    key={link.name}
                                    className={'  w-full  pr-6 '}
                                >
                                    <NavLink
                                        className={({
                                                        isActive,
                                                        isPending,
                                                    }) => ' flex flex-row items-center justify-start   rounded-r-full  p-4 text-lg font-semibold hover:bg-gray-100 ' + (isPending ? 'pending' : isActive ? 'bg-gradient-to-r from-app-blue   to-app-purple text-white hover:bg-gray-300' : '')}
                                        to={`${link.path}`}
                                    >
                                        <div className={'pl-8'}>
                                            <span>{link.name}</span>
                                        </div>
                                    </NavLink>
                                </div>))}
                        </div>
                    </nav>
                </section>
                <Outlet />
            </div>

        </div>
        )
    </div>;

};
