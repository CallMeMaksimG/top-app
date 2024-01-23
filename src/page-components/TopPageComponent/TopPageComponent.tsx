import styles from './TopPageComponent.module.scss';
import { TopPageComponentProps } from './TopPageComponent.props';
import { Advantages, Htag, Product, Sort, Tag } from '@/components';
import { HhData } from '@/components/HhData/HhData';
import { TopLevelCategory } from '../../../interfaces/page.interface';
import { SortEnum } from '@/components/Sort/Sort.props';
import { useEffect, useReducer } from 'react';
import { sortReducer } from './sort.reducer';
import { useReducedMotion } from 'framer-motion';

export const TopPageComponent = ({
    page,
    products,
    firsCategory,
}: TopPageComponentProps): JSX.Element => {
    const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
        sortReducer,
        { products, sort: SortEnum.Rating }
    );
    const shouldReduceMotion = useReducedMotion();

    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort });
    };

    useEffect(() => {
        dispatchSort({ type: 'reset', initialState: products });
    }, [products]);
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && (
                    <Tag
                        color="grey"
                        size="m"
                        aria-label={products.length + ' элементов'}
                    >
                        {products.length}
                    </Tag>
                )}
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div role="list">
                {sortedProducts &&
                    sortedProducts.map((p) => (
                        <Product
                            role="listitem"
                            layout={shouldReduceMotion ? false : true}
                            key={p._id}
                            product={p}
                        ></Product>
                    ))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                {products && (
                    <Tag color="red" size="m">
                        hh.ru
                    </Tag>
                )}
            </div>
            <div className={styles.hh}>
                {firsCategory === TopLevelCategory.Courses && page.hh && (
                    <HhData children={undefined} {...page.hh}></HhData>
                )}
            </div>

            {page.advantages && page.advantages.length > 0 && (
                <>
                    <Htag tag="h2">Преимущества</Htag>
                    <Advantages advantages={page.advantages} />
                </>
            )}
            {page.seoText && (
                <div
                    className={styles.seo}
                    dangerouslySetInnerHTML={{ __html: page.seoText }}
                ></div>
            )}
            <Htag tag="h2">Получаемые навыки</Htag>
            {page.tags.map((t) => (
                <Tag className={styles.tag} color="primary" key={t}>
                    {t}
                </Tag>
            ))}
        </div>
    );
};
