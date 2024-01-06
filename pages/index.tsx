import { Button, Htag, P } from '@/components';

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
        </>
    );
}
