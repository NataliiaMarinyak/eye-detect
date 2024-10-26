import i18n from 'i18next';
import * as yup from "yup";


// const regexPhone = /^\+\d{12}$/;
const regexPhone2 = /^[+\d](?:.*\d)?$/;
// const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


export const feedbackFormSchema = () => {
    return yup.object({
        name: yup
            .string()
            .required(i18n.t("FormErrors.RequiredField"))
            .min(2, i18n.t("FormErrors.ShortName"))
        // .required("Обов’язкове поле")
        // .min(2, "Занадто коротке")
        ,
        tel: yup
            // .number()
            .string()
            .required(i18n.t("FormErrors.RequiredField"))
            .matches(regexPhone2, "+380XXXXXXXXX")
            .test('moreThanEight', i18n.t("FormErrors.ShortNumber"), value => !value || value.toString().length > 8)
        // .integer(i18n.t("FormErrors.OnlyInteger"))
        // .typeError(i18n.t("FormErrors.OnlyNumbers"))

        // .matches(regexPhone, "+380123456789")
        // .required("Обов’язкове поле")
        // предусмотреть номера других стран
        ,
        email: yup
            .string()
            // .required(i18n.t("FormErrors.requiredField"))
            .email(i18n.t("FormErrors.InvalidEmail"))
        // .required("FormErrors.requiredField")
        // .email("FormErrors.invalidEmail")
        // .matches(regexEmail, "user@gmail.com")
        ,
        comment: yup
            .string()
    })
}