
import { useToast } from '../react-common/toast/ToastProvider.tsx';




export const ExampleToastAutoClose = () => {
    const toast = useToast();
    const showToast = () => {
        toast('✅ was saved successfully');
    };
    return (
        <div
            className={'flex h-64 flex-col items-start justify-start  p-12 gap-4 '}
        >
            <div id={'navbar-padding'} className={'h-14 text-2xl font-bold'}>Toast</div>

            <p>
                This auto closing toast is a simple example of a toast component (a global one with a provider and a hook), based on the
                HTML
                <a className={'text-app-blue'}
                   href={'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover'}> popover element.</a>
            </p>


            <div className={'w-40'}>
                <button className={` px-5 m-4 rounded  bg-green-300 p-2 text-sm font-semibold shadow-sm`} onClick={() => showToast()}>
                    show toast
                </button>
            </div>


        </div>);


};
