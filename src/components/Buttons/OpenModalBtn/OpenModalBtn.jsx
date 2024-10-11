'use client';
import styles from "./OpenModalBtn.module.scss";


const OpenModalBtn = ({ customBtn, type }) => {
    const openModal = () => console.log("Modal is open")

    return (
        <button
            className={styles.btn + " " + customBtn}
            onClick={openModal}
            type={type}
        >
            Замовити консультацію
        </button>
    );
};


export default OpenModalBtn;