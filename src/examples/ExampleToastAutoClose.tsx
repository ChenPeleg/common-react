
import { useToast } from '../react-common/toast/ToastProvider.tsx';

export const ExampleToastAutoClose = () => {
    const toast = useToast();
    const showToast = () => {
        toast('✅ was saved successfully');
    };
    return (
        <div
            className={
                'flex h-96 w-3/4 flex-col items-center justify-center rounded-lg bg-gray-100 p-8 shadow-lg'
            }
        >
            <button onClick={showToast}>show toast</button>
        </div>
    );
};
