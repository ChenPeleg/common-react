import { Popover } from '../library/popover/Popover.tsx';

export const ApplinksPanel = () => {
    // const user = {
    //     RegistrationDate: 'Sun Jan 07 2024',
    //     RegistrationType: 1,
    //     Role: 1,
    //     FullName: 'Chen Peleg',
    //     photoURL:
    //         'https://lh3.googleusercontent.com/a/ACg8ocJSMe5-XfblQbGjceUKCPE53K7DCHOTmE5CLOmK7I4WkxJu=s96-c',
    //     Email: 'chenpeleg@gmail.com',
    //     Status: 1,
    //     UID: 'kh3kXt61ZrbjZccnELufpstWsUS2',
    // };
    return (
        <div
            className={
                'flex h-96 w-3/4 flex-col items-center justify-center rounded-lg   p-8 shadow-lg '
            }
        >
            App links panel
            <Popover className={'relative   bg-red-200'} relativePosition={{}}>
                {(closePopover) => (
                    <div className={'  bg-white p-5'}>
                        <p className={'bg-white'}>
                            Please input a correct task in the input field
                        </p>

                        <button onClick={closePopover}>Close</button>
                    </div>
                )}
            </Popover>
            {/*<div*/}
            {/*    className={*/}
            {/*        'flex flex-row items-center justify-center bg-green-200'*/}
            {/*    }*/}
            {/*>*/}
            {/*    <Popover*/}
            {/*        relativePosition={{ xOffset: -200 }}*/}
            {/*        className={*/}
            {/*            '  flex h-80 w-80 flex-row items-center justify-center'*/}
            {/*        }*/}
            {/*        button={*/}
            {/*            <>*/}
            {/*                {user.photoURL ? (*/}
            {/*                    <div*/}
            {/*                        className={*/}
            {/*                            '  group flex cursor-pointer flex-col items-center justify-center  '*/}
            {/*                        }*/}
            {/*                    >*/}
            {/*                        <div*/}
            {/*                            className={*/}
            {/*                                ' h-10 w-10 rounded-full group-hover:bg-app-blue group-hover:shadow-amber-400 group-hover:ring-2 group-hover:ring-offset-2'*/}
            {/*                            }*/}
            {/*                        >*/}
            {/*                            <img*/}
            {/*                                className={*/}
            {/*                                    ' h-10 w-10 rounded-full   '*/}
            {/*                                }*/}
            {/*                                src={user.photoURL}*/}
            {/*                                alt={'user'}*/}
            {/*                            />*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                ) : (*/}
            {/*                    <div*/}
            {/*                        className={'flex flex-col justify-center '}*/}
            {/*                        onClick={() => {}}*/}
            {/*                    >*/}
            {/*                        <div*/}
            {/*                            className={`  flex h-10 w-10 cursor-pointer items-center*/}
            {/*                justify-center rounded-full bg-gradient-to-r from-app-blue*/}
            {/*                 to-app-purple  text-center font-medium text-white hover:bg-opacity-20`}*/}
            {/*                        >*/}
            {/*                            <p*/}
            {/*                                className="p "*/}
            {/*                                style={{ letterSpacing: '0.08rem' }}*/}
            {/*                            >*/}
            {/*                                {getFirstTwoLettersFromUser(user)}*/}
            {/*                            </p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                )}*/}
            {/*            </>*/}
            {/*        }*/}
            {/*    >*/}
            {/*        {(closePopover) => (*/}
            {/*            <div className={' bg-red-200 p-5'}>*/}
            {/*                <p className={'bg-white'}>*/}
            {/*                    Please input a correct task in the input field*/}
            {/*                </p>*/}
            {/*                <button onClick={closePopover}>Close</button>*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </Popover>*/}
            {/*</div>*/}
        </div>
    );
};
