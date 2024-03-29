import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';
import Logo from '../logo.svg';
import { Search } from '@/components';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            <Logo className={styles.logo}/>
            <Search></Search>
            <Menu />
        </div>
    );
};
