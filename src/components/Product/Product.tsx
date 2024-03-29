import { motion } from 'framer-motion';
import { ProductProps } from './Product.props';
import styles from './Product.module.scss';
import { Card } from '../Card/Card';
import { Button, Divider, Rating, Review, ReviewForm, Tag } from '..';
import { declOfNum, priceRu } from '../../../helpers/helpers';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';

export const Product = motion(
    forwardRef(
        (
            { product, className, ...props }: ProductProps,
            ref: ForwardedRef<HTMLDivElement>
        ): JSX.Element => {
            const [isReviewOpened, setIsReviewOpened] =
                useState<boolean>(false);
            const reviewRef = useRef<HTMLDivElement>(null);

            const variants = {
                visible: { opacity: 1, height: 'auto', overflow: 'visible' },
                hidden: { opacity: 0, height: 0, overflow: 'hidden' },
            };
            const scrollToReview = () => {
                setIsReviewOpened(true);
                reviewRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                reviewRef.current?.focus();
            };
            return (
                <div className={className} {...props} ref={ref}>
                    <Card className={styles.product}>
                        <div className={styles.logo}>
                            <Image
                                src={
                                    process.env.NEXT_PUBLIC_DOMAIN +
                                    product.image
                                }
                                alt={product.title}
                                height={70}
                                width={70}
                            />
                        </div>
                        <div className={styles.title}>{product.title}</div>
                        <div className={styles.price}>
                            <span>
                                <span className="visualy-hidden">Цена</span>
                                {priceRu(product.price)}
                            </span>
                            {product.oldPrice && (
                                <Tag className={styles.oldPrice} color="green">
                                    <span className="visualy-hidden">
                                        скидка{' '}
                                    </span>
                                    {priceRu(product.price - product.oldPrice)}
                                </Tag>
                            )}
                        </div>
                        <div className={styles.credit}>
                            <span className="visualy-hidden">кредит</span>
                            {priceRu(product.credit)}/
                            <span className={styles.month}>мес</span>
                        </div>
                        <div className={styles.rating}>
                            <span className="visualy-hidden">
                                {'рейтинг' + product.reviewAvg ??
                                    product.initialRating}
                            </span>
                            <Rating
                                rating={
                                    product.reviewAvg ?? product.initialRating
                                }
                            ></Rating>
                        </div>
                        <div className={styles.tags}>
                            {product.categories.map((c) => (
                                <Tag
                                    key={c}
                                    color="ghost"
                                    className={styles.category}
                                >
                                    {c}
                                </Tag>
                            ))}
                        </div>
                        <div className={styles.priceTitle} aria-hidden={true}>
                            цена
                        </div>
                        <div className={styles.creditTitle} aria-hidden={true}>
                            кредит
                        </div>
                        <div className={styles.rateTitle}>
                            <a href="#ref" onClick={scrollToReview}>
                                {product.reviewCount}{' '}
                                {declOfNum(product.reviewCount, [
                                    'отзыв',
                                    'отзыва',
                                    'отзывов',
                                ])}
                            </a>
                        </div>
                        <Divider className={styles.hr}></Divider>
                        <div className={styles.description}>
                            {product.description}
                        </div>
                        <div className={styles.feature}>
                            {product.characteristics.map((c) => {
                                return (
                                    <div
                                        className={styles.characteristics}
                                        key={c.name}
                                    >
                                        <span
                                            className={
                                                styles.characteristicsName
                                            }
                                        >
                                            {c.name}
                                        </span>
                                        <span
                                            className={
                                                styles.characteristicsDots
                                            }
                                        ></span>
                                        <span
                                            className={
                                                styles.characteristicsValue
                                            }
                                        >
                                            {c.value}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.advBlock}>
                            {product.advantages && (
                                <div className={styles.advantages}>
                                    <div className={styles.advTitle}>
                                        Преимущества
                                    </div>
                                    <div>{product.advantages}</div>
                                </div>
                            )}

                            {product.disAdvantages && (
                                <div className={styles.disAdvantages}>
                                    <div className={styles.advTitle}>
                                        Недостатки
                                    </div>
                                    <div>{product.disAdvantages}</div>
                                </div>
                            )}
                        </div>
                        <Divider className={styles.hr}></Divider>
                        <div className={styles.actions}>
                            <Button appearance="primary">
                                Узнать подробнее
                            </Button>
                            <Button
                                onClick={() =>
                                    setIsReviewOpened(!isReviewOpened)
                                }
                                className={styles.reviewButton}
                                appearance="ghost"
                                arrow={isReviewOpened ? 'down' : 'right'}
                                aria-expanded={isReviewOpened}
                            >
                                Читать отзывы
                            </Button>
                        </div>
                    </Card>
                    <motion.div
                        animate={isReviewOpened ? 'visible' : 'hidden'}
                        variants={variants}
                        initial="hidden"
                    >
                        <Card
                            color="blue"
                            className={styles.review}
                            ref={reviewRef}
                            tabIndex={isReviewOpened ? 0 : -1}
                        >
                            {product.reviews.map((r) => (
                                <div key={r._id}>
                                    <Review review={r} />
                                    <Divider />
                                </div>
                            ))}
                            <ReviewForm
                                productId={product._id}
                                isOpened={isReviewOpened}
                            />
                        </Card>
                    </motion.div>
                </div>
            );
        }
    )
);
