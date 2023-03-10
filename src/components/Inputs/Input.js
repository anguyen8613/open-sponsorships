import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import styles from "../../../styles/styles.module.scss"
import { useFormData } from '../../context';

const Input = ({ name, label, ...rest }) => {
  const inputRef = useRef();

  const {data} =useFormData();

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref) => {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);
  return (
    <>
      <label htmlFor={fieldName}>{label}</label>
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={data[fieldName]}
        {...rest}
      />

      {error && <p className={styles.errorText}>{error}</p>}
    </>
  );
};

export default Input;