"use client";
// import { useEffect, useState, useMemo } from "react";
// import { useEffect, useMemo } from "react";
import { useEffect } from "react";
// import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { useModalActions } from "@/hooks/modalActions";
import { orderFormSchema } from "@/yupSchemas/orderFormSchema";
import { sendToTelegram } from "@/helpers/sendToTelegram";
import styles from "./OrderForm.module.scss";

const OrderForm = ({ dictionary }) => {
  // console.log("dictionary in orderForm", dictionary);
  // const { t } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  // const schema = useMemo(() => orderFormSchema(), []);

  const { closeModal } = useModalActions();

  const initialValues = {
    defaultValues: {
      name: "",
      tel: "",
      email: "",
      comment: "",
    },
    resolver: yupResolver(orderFormSchema(dictionary)),
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
    toast.success(dictionary.notifications.success);
    closeModal();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputWrap}>
        {!dirtyFields.name && !errors.name && (
          <svg className={styles.iconMark}>
            <use href="/sprite.svg#icon-important"></use>
          </svg>
        )}

        {errors.name && (
          <svg className={styles.iconError}>
            <use href="/sprite.svg#icon-error" />
          </svg>
        )}

        {dirtyFields.name && !errors.name && (
          <svg className={styles.iconSuccess}>
            <use href="/sprite.svg#icon-success" />
          </svg>
        )}

        <p className={styles.error}>{errors.name?.message}</p>

        <input
          type="text"
          {...register("name")}
          placeholder={dictionary.form.name}
          maxLength="30"
          autoComplete="off"
          className={
            dirtyFields.name && !errors.name
              ? `${styles.input} ${styles.successInput}`
              : styles.input
          }
        />
      </div>

      <div className={styles.inputWrap}>
        {!dirtyFields.tel && !errors.tel && (
          <svg className={styles.iconMark}>
            <use href="/sprite.svg#icon-important"></use>
          </svg>
        )}

        {errors.tel && (
          <svg className={styles.iconError}>
            <use href="/sprite.svg#icon-error" />
          </svg>
        )}

        {dirtyFields.tel && !errors.tel && (
          <svg className={styles.iconSuccess}>
            <use href="/sprite.svg#icon-success" />
          </svg>
        )}

        <p className={styles.error}>{errors.tel?.message}</p>

        <input
          type="text"
          {...register("tel")}
          placeholder={dictionary.form.tel}
          maxLength="16"
          autoComplete="off"
          className={
            dirtyFields.tel && !errors.tel
              ? `${styles.input} ${styles.successInput}`
              : styles.input
          }
        />
      </div>

      <div className={styles.inputWrap}>
        <p className={styles.error}>{errors.email?.message}</p>

        <input
          type="text"
          {...register("email")}
          placeholder={dictionary.form.email}
          maxLength="254"
          autoComplete="off"
          className={
            errors.email ? `${styles.input} ${styles.errorInput}` : styles.input
          }
        />
      </div>

      <div className={`${styles.inputWrap} ${styles.textareaWrap}`}>
        <p className={styles.error}>{errors.comment?.message}</p>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          cols="30"
          rows="2"
          placeholder={dictionary.form.textArea}
          {...register("comment")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={
          !isSubmitted || (isValid && isSubmitted)
            ? `${styles.submitButton} ${styles.activeBtn}`
            : styles.submitButton
        }
      >
        {dictionary.buttons.sendRequest}
      </button>
    </form>
  );
};

export default OrderForm;
