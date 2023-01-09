import { useState, createContext, useContext } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  const clearFormValues = ()=> {
    setData({})
  }

  return (
    <FormContext.Provider value={{ data, setFormValues, clearFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
export default FormProvider;