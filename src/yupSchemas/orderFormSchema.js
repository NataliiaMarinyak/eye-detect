import * as yup from "yup";

const regexPhone2 = /^[+\d](?:.*\d)?$/;

export const orderFormSchema = (dictionary) => {
  return yup.object({
    name: yup
      .string()
      .required(dictionary.formErrors.requiredField)
      .min(2, dictionary.formErrors.shortName),
    tel: yup
      .string()
      .required(dictionary.formErrors.requiredField)
      .matches(regexPhone2, "+380XXXXXXXXX")
      .test(
        "moreThanEight",
        dictionary.formErrors.shortNumber,
        (value) => !value || value.toString().length > 8
      ),
    email: yup.string().email(dictionary.formErrors.invalidEmail),
    comment: yup.string(),
  });
};
