import { Button, Htag, P, Rating, Tag } from '@/components';
import { withLayout } from '@/layout/Layout';
import { useState } from 'react';

function Page() {
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
        </>
    );
}

export default withLayout(Page);
