import * as yup from "yup";
import { isValidPhone } from "./phoneRules";

// texts.phone — повідомлення з прикладом номера мовою сторінки.
// texts.choice — текст помилки для обов'язкового вибору (якщо у формі є вибір формату).
export const orderFormSchema = (dictionary, texts = {}) => {
  return yup.object({
    name: yup
      .string()
      .required(dictionary.formErrors.requiredField)
      .min(2, dictionary.formErrors.shortName),
    tel: yup
      .string()
      .required(dictionary.formErrors.requiredField)
      .test("phone", texts.phone || dictionary.formErrors.shortNumber, (value) => !value || isValidPhone(value)),
    email: yup.string().email(dictionary.formErrors.invalidEmail),
    comment: yup.string(),
    ...(texts.choice
      ? { format: yup.string().typeError(texts.choice).required(texts.choice) }
      : {}),
  });
};
