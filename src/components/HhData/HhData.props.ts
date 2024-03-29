import { ReactNode } from 'react';
import { HhData } from '../../../interfaces/page.interface';

export interface HhDataProps extends HhData {
    color?: 'white' | 'blue';
    children: ReactNode;
}