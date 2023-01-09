import { useRef } from "react";
import styles from "../../../styles/styles.module.scss";
import { Form } from "@unform/web";
import { useFormData } from "../../context";
import * as yup from "yup";
import Input from '../Inputs/Input';

const schema = yup.object().shape({
  age: yup
    .number()
    .max(200, "Max age reached" )
    .required("Age is required"),
  height: yup
    .number()
    .required("Height is required"),
  weight: yup
    .number()
    .required("Weight is required"),
});

const AdditionalInfo = ({ formStep, nextFormStep }) => {
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
    <div className={formStep === 1 ? styles.showForm : styles.hideForm}>
      <h2>Personal Traits</h2>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <Input name="age" label="Age" type="Age" />
          <Input name="height" label="Height" type="Height" />
          <Input name="weight" label="Weight" type="Weight" />
        </div>
        <button type="submit">Next</button>
      </Form>
    </div>
  );
}

export default AdditionalInfo;