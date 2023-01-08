import styles from '../../styles/styles.module.scss';

const FormCard = ({ children, currentStep, prevFormStep }) => {
  return (
    <div className={styles.formCard}>
      {currentStep < 4 && (
        <>
          {currentStep > 0 && (
            <button
              onClick={prevFormStep}
              type="button"
            >
              back
            </button>
          )}

          {currentStep < 3 ? (<span className={styles.steps}>Step {currentStep + 1} of 3</span>): (<span className={styles.steps}>Please review before submitting.</span>)}
        </>
      )}
      {children}
    </div>
  );
}

export default FormCard;