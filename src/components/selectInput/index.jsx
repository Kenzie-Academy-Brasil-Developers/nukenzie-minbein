import styles from "./styles.module.scss"

const SelectInput = ({ label, options, value, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
