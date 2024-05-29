import { AppButton } from '../shared/AppButton/AppButton.tsx';
import { useToast } from '../library/toast/ToastProvider.tsx';

export const ExampleToastExternal = () => {
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
            <AppButton onClick={showToast}>show toast</AppButton>
        </div>
    );
};
