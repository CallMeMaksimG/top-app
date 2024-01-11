import cn from 'classnames';
import styles from './TopPageComponent.module.scss';
import { TopPageComponentProps } from './TopPageComponent.props';

export const TopPageComponent = ({
    page,
    products,
    firsCategory,
}: TopPageComponentProps): JSX.Element => {
    return <>{products && products.length}</>;
};
