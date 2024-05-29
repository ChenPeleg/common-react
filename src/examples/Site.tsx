import { NavLink,   Route, Routes, useNavigate } from 'react-router-dom';
import favicon from '../../public/favicon.png';
import { ExampleDialog } from './ExampleDialog.tsx';
import { ExampleFormComponent } from './ExampleFormComponent.tsx';
import { ExampleMenu } from './ExampleMenu.tsx';
import { ExamplePopover } from './ExamplePopover.tsx';

import { ExampleToast } from './ExampleToast.tsx';
import { ExampleToastExternal } from './ExampleToastExternal.tsx';
import { About } from './About.tsx';

const exampleRouts =
    [{
    path: '/about',
    name: 'About',
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
    return <div className={'w-screen h-screen overflow-x-hidden overflow-y-hidden'} id={'site-root'}>
        <div
            id={'nav-bar-container'}
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
                            className={'flex  h-full flex-row  gap-3  items-center hover:text-gray-400'}
                        >
                            <img className={'w-6 h-6'} src={favicon} alt={'app logo'} />
                            <span className={'text-2xl font-semibold'}> Common React Component and utils</span>
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

        <div id={'content-container'} className={'flex   w-screen flex-row '}>
            <nav className={'     top-0 z-20 h-screen min-w-80 w-80  shadow '}>
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
            </nav>

            <main className={'w-full h-full bg-amber-400  '}>
                <Routes>
                <Route path="/examples" element={ <></>}>
                    <Route
                        path="/examples/dialog"
                        element={

                                <ExampleDialog />

                        }
                    />
                    <Route
                        path="/examples/form"
                        element={<ExampleFormComponent />}
                    />
                    <Route path="/examples/menu" element={<ExampleMenu />} />
                    <Route
                        path="/examples/popover"
                        element={<ExamplePopover />}
                    />
                    <Route
                        path="/examples/applinksPanel"
                        element={<ExamplePopover />}
                    /> 
                    <Route path="/examples/toast" element={<ExampleToast />} />
                    <Route
                        path="/examples/toast-external"
                        element={<ExampleToastExternal />}
                    />

                    <Route
                        path={''}
                        element={< About/>}
                    />  <Route
                    path={'/about'}
                    element={< About/>}
                />
                </Route>
                </Routes>

            </main>


        </div>

        )

    </div>;

};
