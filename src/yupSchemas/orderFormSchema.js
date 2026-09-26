import * as yup from "yup";

// texts.phone — повідомлення з прикладом номера мовою сторінки.
// texts.choice — текст помилки для обов'язкового вибору (якщо у формі є вибір формату).
export const orderFormSchema = (dictionary, texts = {}) => {
  return yup.object({
    name: yup
      .string()
      .required(dictionary.formErrors.requiredField)
      .min(2, dictionary.formErrors.shortName),
    // Телефон необов'язковий і без перевірки формату (рішення власника 16.09 і 26.09.2026):
    // обов'язкове лише ім'я, порожній контакт сервер позначає в заявці.
    tel: yup.string(),
    email: yup.string().email(dictionary.formErrors.invalidEmail),
    comment: yup.string(),
    ...(texts.choice
      ? { format: yup.string().typeError(texts.choice).required(texts.choice) }
      : {}),
  });
};
