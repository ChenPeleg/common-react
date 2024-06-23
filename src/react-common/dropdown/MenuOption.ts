import { ReactNode } from 'react';
import { IconName } from '../../styles/Icons.tsx';

export interface MenuOption {
    label: string | ReactNode;
    id: string | number;
    data?: any;
    icon?: string | IconName;
}
