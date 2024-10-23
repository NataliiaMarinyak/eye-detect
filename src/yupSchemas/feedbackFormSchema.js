import * as yup from "yup";

const regexPhone = /^\+\d{12}$/;

import i18n from 'i18next';

export const feedbackFormSchema = ()=>
    {return yup.object({
        name: yup
            .string()
            .required(i18n.t("FormErrors.RequiredField"))
            .min(2, i18n.t("FormErrors.ShortName"))
            // .required("Обов’язкове поле")
            // .min(2, "Занадто коротке")
        ,
        tel: yup
            .string()
            .required(i18n.t("FormErrors.RequiredField"))
            // .matches(regexPhone, "+380123456789")
            // .required("Обов’язкове поле")
            // предусмотреть номера других стран
            .matches(regexPhone, "+012345678901")
        ,
        email: yup
            .string()
        // .required(i18n.t("FormErrors.requiredField"))
        // .email(i18n.t("FormErrors.invalidEmail"))
        // .required("FormErrors.requiredField")
        // .email("FormErrors.invalidEmail")
        ,
        comment: yup
            .string()
    })}