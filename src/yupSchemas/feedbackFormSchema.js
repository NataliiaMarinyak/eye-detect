import i18n from 'i18next';
import * as yup from "yup";

const regexPhone2 = /^[+\d](?:.*\d)?$/;


export const feedbackFormSchema = () => {
    return yup.object({
        name: yup
            .string()
            .required(i18n.t("FormErrors.RequiredField"))
            .min(2, i18n.t("FormErrors.ShortName"))
        ,
        tel: yup
            .string()
            .required(i18n.t("FormErrors.RequiredField"))
            .matches(regexPhone2, "+380XXXXXXXXX")
            .test('moreThanEight', i18n.t("FormErrors.ShortNumber"), value => !value || value.toString().length > 8)
        ,
        email: yup
            .string()
            .email(i18n.t("FormErrors.InvalidEmail"))
        ,
        comment: yup
            .string()
    })
}