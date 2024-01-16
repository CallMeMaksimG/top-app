import cn from 'classnames';
import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.scss';
import { ForwardedRef, forwardRef } from 'react';

export const Textarea = forwardRef(({
    className,
    ...props
}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
       <textarea className={cn(className, styles.textarea)} ref={ref} {...props}/>
    );
});
