import styles from "./styles.module.scss"

const Input = ({
  label,
  id,
  type,
  placeholder,
  value,
  setValue,
  helpText = null,
}) => {
  return (
    <>
      <div className={styles.inputContainer}>
        <label htmlFor={id}>{label}</label>
        <input
          name={id}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {helpText && <span className={styles.span}>{helpText}</span>}
    </>
  );
};
export default Input;
