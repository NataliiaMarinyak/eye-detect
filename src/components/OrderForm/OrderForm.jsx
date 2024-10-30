"use client";
import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { useModalActions } from "@/hooks/modalActions";
import { feedbackFormSchema } from "@/yupSchemas/feedbackFormSchema";
import { sendToTelegram } from "@/helpers/sendToTelegram";
import styles from "./OrderForm.module.scss";


const OrderForm = () => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setIsLoading(false), []);

    const schema = useMemo(() => feedbackFormSchema(), []);

    const { closeModal } = useModalActions();


    const initialValues = {
        defaultValues: {
            name: "",
            tel: "",
            email: "",
            comment: "",
        },
        resolver: yupResolver(schema),
        mode: "onChange",
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset } = form;
    const {
        errors,
        isSubmitSuccessful,
        isValid,
        isSubmitting,
        isSubmitted,
        dirtyFields,
    } = formState;

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit = (data) => {
        sendToTelegram(data);
        toast.success(t('Notifications.Success'));
        closeModal();
    };


    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
        >
            {!isLoading && <div className={styles.inputWrap}>
                {!dirtyFields.name && !errors.name && <svg className={styles.iconMark}>
                    <use href='/sprite.svg#icon-important'></use>
                </svg>}

                {errors.name && (
                    <svg className={styles.iconError}>
                        <use href='/sprite.svg#icon-error' />
                    </svg>
                )}

                {dirtyFields.name && !errors.name && (
                    <svg className={styles.iconSuccess}>
                        <use href='/sprite.svg#icon-success' />
                    </svg>
                )}

                <p className={styles.error}>{errors.name?.message}</p>

                <input
                    type='text'
                    {...register("name")}
                    placeholder={t('Form.Name')}
                    maxLength='30'
                    autoComplete='off'
                    className={
                        dirtyFields.name && !errors.name
                            ? `${styles.input} ${styles.successInput}`
                            : styles.input
                    }
                />
            </div>}

            {!isLoading && <div className={styles.inputWrap}>
                {!dirtyFields.tel && !errors.tel && <svg className={styles.iconMark}>
                    <use href='/sprite.svg#icon-important'></use>
                </svg>}

                {errors.tel && (
                    <svg className={styles.iconError}>
                        <use href='/sprite.svg#icon-error' />
                    </svg>
                )}

                {dirtyFields.tel && !errors.tel && (
                    <svg className={styles.iconSuccess}>
                        <use href='/sprite.svg#icon-success' />
                    </svg>
                )}

                <p className={styles.error}>{errors.tel?.message}</p>

                <input
                    type='text'
                    {...register("tel")}
                    placeholder={t('Form.Tel')}
                    maxLength='16'
                    autoComplete='off'
                    className={
                        dirtyFields.tel && !errors.tel
                            ? `${styles.input} ${styles.successInput}`
                            : styles.input
                    }
                />
            </div>}

            {!isLoading && <div className={styles.inputWrap}>
                <p className={styles.error}>{errors.email?.message}</p>

                <input
                    type='text'
                    {...register("email")}
                    placeholder={t('Form.Email')}
                    maxLength='254'
                    autoComplete='off'
                    className={
                        errors.email
                            ? `${styles.input} ${styles.errorInput}`
                            : styles.input
                    }
                />
            </div>}

            {!isLoading && <div className={`${styles.inputWrap} ${styles.textareaWrap}`}>
                <p className={styles.error}>{errors.comment?.message}</p>
                <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    cols='30'
                    rows='2'
                    placeholder={t('Form.TextArea')}
                    {...register("comment")}
                />
            </div>}

            {!isLoading && <button
                type='submit'
                disabled={isSubmitting}
                className={
                    !isSubmitted || (isValid && isSubmitted)
                        ? `${styles.submitButton} ${styles.activeBtn}`
                        : styles.submitButton
                }

            >
                {t('Buttons.SendRequest')}
            </button>}
        </form >
    )
}


export default OrderForm