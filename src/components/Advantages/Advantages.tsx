import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.scss';
import CheckIcon from './check.svg';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map((a) => {
                return (
                    <div key={a._id} className={styles.advantage}>
                        <div className={styles.checkIcon}>
                            <CheckIcon />
                        </div>
                        <div className={styles.title}>{a.title}</div>
                        <hr className={styles.vline} />
                        <div>{a.description}</div>
                    </div>
                );
            })}
        </>
    );
};
