import * as yup from "yup";

// texts.phone — повідомлення з прикладом номера мовою сторінки.
// texts.choice — текст помилки для обов'язкового вибору (якщо у формі є вибір формату).
export const orderFormSchema = (dictionary, texts = {}) => {
  return yup.object({
    name: yup
      .string()
      .required(dictionary.formErrors.requiredField)
      .min(2, dictionary.formErrors.shortName),
    // Формат телефону не перевіряємо: у різних країнах він різний (рішення власника 16.09.2026).
    tel: yup.string().required(dictionary.formErrors.requiredField),
    email: yup.string().email(dictionary.formErrors.invalidEmail),
    comment: yup.string(),
    ...(texts.choice
      ? { format: yup.string().typeError(texts.choice).required(texts.choice) }
      : {}),
  });
};
