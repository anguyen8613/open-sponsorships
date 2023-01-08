import { useState, useRef } from "react";
import Head from "next/head";

import styles from "../../../styles/styles.module.scss";

import FormCard from '../../components/FormCard';
import SportsInfo from '../../components/Forms/SportsInfo';
import AdditionalInfo from '../../components/Forms/AdditionalInfo';
import FormCompleted from '../../components/FormCompleted';
import { BasicInfo } from '../../components/Forms/BasicInfo';

const ProfileForms = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div className={styles.container}>
      <Head>
        <title>Open Sponsorships Profile</title>
      </Head>
      <h1>Unform Multi Step Form</h1>

      <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
        {formStep >= 0 && (
          <BasicInfo formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 1 && (
          <AdditionalInfo formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 2 && (
          <SportsInfo formStep={formStep} nextFormStep={nextFormStep} />
        )}

        {formStep > 2 && <FormCompleted formStep={formStep} />}
      </FormCard>
    </div>
  );
};

export default ProfileForms;
