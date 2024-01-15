import cn from 'classnames';
import { ProductProps } from './Product.props';
import styles from './Product.module.scss';
import { Card } from '../Card/Card';
import { Button, Divider, Rating, Tag } from '..';
import { priceRu } from '../../../helpers/helpers';

export const Product = ({
    product,
    className,
    ...props
}: ProductProps): JSX.Element => {
    return (
        <Card className={styles.product}>
            <div className={styles.logo}>
                <img
                    src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                    alt={product.title}
                />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {priceRu(product.price)}
                {product.oldPrice && (
                    <Tag className={styles.oldPrice} color="green">
                        {priceRu(product.price - product.oldPrice)}
                    </Tag>
                )}
            </div>
            <div className={styles.credit}>
                {priceRu(product.credit)}/
                <span className={styles.month}>мес</span>
            </div>
            <div className={styles.rating}>
                <Rating
                    rating={product.reviewAvg ?? product.initialRating}
                ></Rating>
            </div>
            <div className={styles.tags}>
                {product.categories.map((c) => (
                    <Tag key={c} color="ghost" className={styles.category}>
                        {c}
                    </Tag>
                ))}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>
                {product.reviewCount} отзывов
            </div>
            <Divider className={styles.hr}></Divider>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>feature</div>
            <div className={styles.advBlock}>
                {product.advantages && (
                    <div className={styles.advantages}>
                        <div className={styles.advTitle}>Преимущества</div>
                        <div>{product.advantages}</div>
                    </div>
                )}

                {product.disAdvantages && (
                    <div className={styles.disAdvantages}>
                        <div className={styles.advTitle}>Недостатки</div>
                        <div>{product.disAdvantages}</div>
                    </div>
                )}
            </div>
            <Divider className={styles.hr}></Divider>
            <div className={styles.actions}>
                <Button appearance="primary">Узнать подробнее</Button>
                <Button
                    className={styles.reviewButton}
                    appearance="ghost"
                    arrow={'right'}
                >
                    Читать отзывы
                </Button>
            </div>
        </Card>
    );
};
