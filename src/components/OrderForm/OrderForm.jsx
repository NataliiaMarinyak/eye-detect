import ButtonLink from '../Buttons/ButtonLink/ButtonLink';
import styles from './OrderForm.module.scss';

const OrderForm = () => {
    return (
        <form className={styles.form}>
            <h2>Форма</h2>
            {/* ButtonLink must be changed to usual button */}
            <ButtonLink href='/' title="Відправити" />
        </form>
    )
}

export default OrderForm