import { Button, Htag, Input, P, Rating, Tag, Textarea } from '@/components';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Page({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);
    return (
        <>
            <Htag tag="h1">Text</Htag>
            <Button appearance="primary" arrow="right">
                Button
            </Button>
            <Button appearance="ghost" arrow="right">
                Button
            </Button>
            <P>Text M</P>
            <P size="s">Text S</P>
            <P size="l">Text Large</P>
            <Tag size="s" color="ghost">
                small
            </Tag>
            <Tag size="m" color="primary">
                medium
            </Tag>
            <Tag size="m" color="grey">
                med
            </Tag>
            <Tag size="m" color="red">
                HH
            </Tag>
            <Rating rating={rating} isEditable setRating={setRating}></Rating>
            <Input />
            <Textarea />
        </>
    );
}

export default withLayout(Page);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory,
    });

    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

export interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
