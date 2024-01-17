import cn from 'classnames';
import { ReviewFormProps } from './ReviewForm.props';
import { Controller, useForm } from 'react-hook-form';
import styles from './ReviewForm.module.scss';
import { Button, Input, Rating, Textarea } from '..';
import CloseIcon from './close.svg';
import { IReviewForm } from './ReviewForm.interface';

export const ReviewForm = ({
    productId,
    className,
    ...props
}: ReviewFormProps): JSX.Element => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IReviewForm>();
    const onSubmit = (data: IReviewForm) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input
                    {...register('name', {
                        required: { value: true, message: 'Заполните имя' },
                    })}
                    error={errors.name}
                    placeholder="Имя"
                />
                <Input
                    {...register('title', {
                        required: {
                            value: true,
                            message: 'Заполните заголовок',
                        },
                    })}
                    placeholder="Заголовок отзыва"
                    error={errors.title}
                    className={styles.title}
                />
                <div className={styles.rating}>
                    <span>Оценка: </span>
                    <Controller
                        control={control}
                        name="rating"
                        render={({ field }) => (
                            <Rating
                                isEditable
                                rating={field.value}
                                ref={field.ref}
                                setRating={field.onChange}
                            />
                        )}
                    />
                </div>
                <Textarea
                    {...register('description', {
                        required: {
                            value: true,
                            message: 'Заполните текст отзыва',
                        },
                    })}
                    placeholder="Текст отзыва"
                    error={errors.description}
                    className={styles.description}
                />
                <div className={styles.submit}>
                    <Button appearance="primary">Отправить</Button>
                    <span className={styles.info}>
                        * Перед публикацией отзыв пройдет предварительную
                        модерацию и проверку
                    </span>
                </div>
            </div>
            <div className={styles.success}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
                <CloseIcon className={styles.close} />
            </div>
        </form>
    );
};
