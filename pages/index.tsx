import { Button, Htag, P, Tag } from '@/components';

export default function Page() {
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
            <P size='l'>Text Large</P>
            <Tag size='s' color='ghost'>small</Tag>
            <Tag size='m' color='primary'>medium</Tag>
            <Tag size='m' color='grey'>med</Tag>
            <Tag size='m' color='red'>HH</Tag>
        </>
    );
}
