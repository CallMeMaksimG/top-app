import styles from './ButtonIcon.module.scss';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import cn from 'classnames';

export const ButtonIcon = ({
    appearance,
    icon,
    className,
    ...props
}: ButtonIconProps): JSX.Element => {
    const IconComp = icons[icon];
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'white',
            })}
            {...props}
        >
            <IconComp />
        </button>
    );
};
