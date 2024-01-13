import cn from 'classnames';
import styles from './TopPageComponent.module.scss';
import { TopPageComponentProps } from './TopPageComponent.props';
import { Advantages, Htag, P, Tag } from '@/components';
import { Card } from '@/components/Card/Card';
import { HhData } from '@/components/HhData/HhData';
import { TopLevelCategory } from '../../../interfaces/page.interface';

export const TopPageComponent = ({
    page,
    products,
    firsCategory,
}: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && (
                    <Tag color="grey" size="m">
                        {products.length}
                    </Tag>
                )}
                <span>Сортировка</span>
            </div>
            <div>
                {products &&
                    products.map((p) => <div key={p._id}>{p.title}</div>)}
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
            {page.seoText && <P>{page.seoText}</P>}
            <Htag tag="h2">Получаемые навыки</Htag>
            {page.tags.map(t => <Tag color='primary' key={t}>{t}</Tag>)}
        </div>
    );
};
