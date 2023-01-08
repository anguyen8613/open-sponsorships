import { useRef, useState } from "react";
import styles from "../../../styles/styles.module.scss";
import { Form } from "@unform/web";
import { MultiSelect } from "react-multi-select-component";
import { useFormData } from "../../context";
import * as yup from "yup";
import Input from '../Inputs/Input';
const schema = yup.object().shape({
  team: yup
    .string()
    .min(2, "Team is too short")
    .required("Team is required"),
});

const SportsInfo = ({ formStep, nextFormStep }) => {
  const { setFormValues } = useFormData();

  const[selectedSports, setSelectedSports] = useState([]);
  const[selectedInterests, setSelectedInterests] = useState([]);
 
  const formRef = useRef();

  const sportsOptions = [
    {label:'Basketball', value: 'Basketball'}, {label:'Soccer', value: 'Soccer'},
     {label:'Football', value: 'Football'}, {label:'Swimming', value: 'Swimming'}
  ]

   const interestOptions = [
    {label:'Tv', value: 'Tv'}, {label:'Camping', value: 'Camping'},
     {label:'Fashion', value: 'Fashion'}, {label:'Excercise', value: 'Excercise'}
  ]


   const handleSubmit = async(data) => {
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed - do something with data
      
      const sports = selectedSports.map((select) => {
        return select.value
      })

      const interests = selectedInterests.map((select) => {
        return select.value
      })

      setFormValues({...data, sports, interests});
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
    <div className={formStep === 2 ? styles.showForm : styles.hideForm}>
      <h2>Billing Info</h2>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <Input name="team" label="Team" type="Team" />
          <label>Sports</label>
          <MultiSelect
            options={sportsOptions}
            value={selectedSports}
            onChange={setSelectedSports}
            hasSelectAll={false}
            ClearSelectedIcon={null}
          />
          <label>Interests</label>
          <MultiSelect
            options={interestOptions}
            value={selectedInterests}
            onChange={setSelectedInterests}
            hasSelectAll={false}
            ClearSelectedIcon={null}
          />
        </div>
        
        <button type="submit">Next</button>
      </Form>

          
    </div>
  );
}

export default SportsInfo;