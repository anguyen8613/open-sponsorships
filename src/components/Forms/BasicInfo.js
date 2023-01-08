import { useRef } from "react";
import styles from "../../../styles/styles.module.scss";
import { Form } from "@unform/web";
import { useFormData } from "../../context";
import * as yup from "yup";
import Input from '../Inputs/Input';

const schema = yup.object().shape({
    name: yup
    .string()
    .min(2, "Name is too short")
    .required("Name is required"),
    location: yup
    .string()
    .min(2, "Location is too short")
    .required("Location is required"),
    gender: yup
    .string()
    .min(2, "Gender is too short")
    .required("Gender is required"),
});

export const BasicInfo = ({ formStep, nextFormStep }) => {
  const { setFormValues } = useFormData();
  const formRef = useRef();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed - do something with data
      setFormValues(data);
      nextFormStep();
    } catch (err) {
      const errors = {};
      // Validation failed - do show error
      if (err instanceof yup.ValidationError) {
        console.log(err.inner);
        // Validation failed - do show error
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        formRef.current.setErrors(errors);
      }
    }
  }

  return (
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
      <h2>Basic Info</h2>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <Input name="name" label="Name" type="Name" />
          <Input name="location" label="Location" type="Location" />
          <Input name="gender" label="Gender" type="Gender" />
        </div>
        
        <button type="submit">Next</button>
      </Form>
    </div>
  );
}
