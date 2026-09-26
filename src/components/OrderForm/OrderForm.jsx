"use client";
import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { useModalActions } from "@/hooks/modalActions";
import { orderFormSchema } from "@/yupSchemas/orderFormSchema";
import { sendToTelegram } from "@/helpers/sendToTelegram";
import { track, attributionForLead } from "@/helpers/analytics";
import { getFormTexts, langFromPath, privacyHref } from "./formTexts";
import styles from "./OrderForm.module.scss";

// compact — лише ім'я і телефон (для спливаючого вікна, щоб кнопка була видна без прокрутки).
// choice — обов'язковий вибір з кількох варіантів (наприклад, формат безкоштовного тесту):
//   { title, options: [підписи мовою сторінки], error, leadKey, leadOptions: [підписи українською для заявки] }.
// showPrivacy — рядок про Політику конфіденційності під кнопкою (у вікні заявки його показує саме вікно).
const OrderForm = ({ dictionary, service = "", compact = true, choice = null, showPrivacy = true, lang: langProp }) => {
  const pathname = usePathname();
  const lang = langProp || langFromPath(pathname);
  const ft = getFormTexts(lang);

  const { closeModal } = useModalActions();

  const schema = useMemo(
    () => orderFormSchema(dictionary, { phone: ft.phoneError, choice: choice?.error }),
    [dictionary, ft.phoneError, choice?.error]
  );

  const form = useForm({
    defaultValues: {
      name: "",
      tel: "",
      email: "",
      comment: "",
      format: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { register, handleSubmit, formState, reset, watch } = form;
  const { errors, isSubmitSuccessful, isValid, isSubmitting, isSubmitted, dirtyFields } = formState;
  const format = watch("format");

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async ({ format: formatIdx, ...data }) => {
    const picked = choice ? (choice.leadOptions || choice.options)[Number(formatIdx)] : "";
    const comment = [data.comment, picked ? `${choice.leadKey || choice.title}: ${picked}` : ""].filter(Boolean).join("\n");
    const ok = await sendToTelegram({ ...data, comment, service });
    if (ok) {
      track("lead_form", { lead_service: service || "консультація", lead_source: attributionForLead().source });
      toast.success(dictionary.notifications.success);
      closeModal();
    } else {
      toast.error(dictionary.notifications.error || "Не вдалося надіслати. Зателефонуйте нам, будь ласка.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* Пастка для ботів: приховане поле, людина його не бачить і не заповнює */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
        {...register("website")}
      />
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
          aria-label={dictionary.form.name}
          aria-invalid={!!errors.name}
          maxLength="30"
          autoComplete="name"
          className={
            dirtyFields.name && !errors.name
              ? `${styles.input} ${styles.successInput}`
              : styles.input
          }
        />
      </div>

      <div className={styles.inputWrap}>
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
          type="tel"
          inputMode="tel"
          {...register("tel")}
          placeholder={dictionary.form.tel}
          aria-label={dictionary.form.tel}
          aria-invalid={!!errors.tel}
          maxLength="20"
          autoComplete="tel"
          className={
            dirtyFields.tel && !errors.tel
              ? `${styles.input} ${styles.successInput}`
              : styles.input
          }
        />
      </div>

      {!compact && (
      <>
      <div className={styles.inputWrap}>
        <p className={styles.error}>{errors.email?.message}</p>

        <input
          type="email"
          inputMode="email"
          {...register("email")}
          placeholder={dictionary.form.email}
          aria-label={dictionary.form.email}
          maxLength="254"
          autoComplete="email"
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
      </>
      )}

      {choice && (
        <fieldset className={styles.choice} data-invalid={errors.format ? "true" : undefined}>
          <legend className={styles.choiceTitle}>{choice.title}</legend>
          <div className={styles.choiceOptions}>
            {choice.options.map((label, i) => (
              <label key={label} className={`${styles.choiceOption} ${format === String(i) ? styles.choiceSelected : ""}`}>
                <input type="radio" value={String(i)} {...register("format")} />
                <span>{label}</span>
              </label>
            ))}
          </div>
          {errors.format && <p className={styles.choiceError}>{errors.format.message}</p>}
        </fieldset>
      )}

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

      {showPrivacy && (
        <p className={styles.privacy}>
          {ft.privacyBefore}
          <a href={privacyHref(lang)} target="_blank" rel="noopener noreferrer">{ft.privacyLink}</a>
          {ft.privacyAfter}
        </p>
      )}
    </form>
  );
};

export default OrderForm;
