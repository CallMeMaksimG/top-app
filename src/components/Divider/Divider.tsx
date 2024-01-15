import cn from 'classnames';
import { DividerProps } from './Divider.props';
import styles from './Divider.module.scss';

export const Divider = ({
    className,
    ...props
}: DividerProps): JSX.Element => {
    return (
       <hr className={cn(className, styles.hr, styles.hr2)} {...props}/>
    );
};
