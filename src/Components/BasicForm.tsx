import { useFormik } from "formik";
import { BasicSchema } from "../Schemas/BasicSchema";
import { FormikHelpers } from "formik";

interface FormValues {
  email: string;
  contactNumber: string;
  password: string;
  confirmPassword: string;
}

const onSubmit = async (
  values: FormValues,
  actions: FormikHelpers<FormValues>
) => {
  // Handle form submission
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function BasicForm() {
  const {
    values,
    errors,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      contactNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit,
    validationSchema: BasicSchema,
  });
  console.log(errors);
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : " "} // errors.email ? it means thereis an error in the email
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      <label htmlFor="age">Contact Number</label>
      <input
        id="contactNumber"
        type="integer"
        placeholder="Enter your Contact Number"
        value={values.contactNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.contactNumber && touched.contactNumber ? "input-error" : " "
        }
      />
      {errors.contactNumber && touched.contactNumber && (
        <p className="error">{errors.contactNumber}</p>
      )}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : " "}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
      <label htmlFor="age">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword
            ? "input-error"
            : " "
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
}

export default BasicForm;
