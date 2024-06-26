import * as yup from "yup";

const passwordRules =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

/*
At least 8 characters long.
Contains at least one uppercase letter.
Contains at least one lowercase letter.
Contains at least one digit.
Contains at least one special character (e.g., !@#$%^&*).
*/

const contactNumberRules = /^\d+$/;

export const BasicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  contactNumber: yup
    .string()
    .matches(contactNumberRules, "Contact number can only contain digits")
    .length(11, "Contact number must be exactly 11 digits")
    .required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
});
