import styles from "./styles.module.scss";
import { useState } from "react";
import Input from "../input";
import FinanceList from "../financeList";
import SelectInput from "../selectInput";
import Total from "../total";

const Form = () => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleInputChange = (e) => {
    setTypeValue(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();

    if (description && value && typeValue) {
      const newTransaction = {
        id: Math.random(),
        description,
        value,
        type: typeValue,
      };
      setTransactions([...transactions, newTransaction]);
    }
  };
  
  const removeTransaction = (id) => {
    const newTransactions = transactions.filter((item) => {
      return item.id != id;
    });

    setTransactions(newTransactions);
  }

  const typeOptions = [
    { label: "Selecione", value: "" },
    { label: "Entrada", value: "Entrada" },
    { label: "Despesa", value: "Despesa" },
  ];

  return (
    <>
      <div className={styles.formContainer}>
        <section>
          <form
            onSubmit={(e) => {
              handleInputSubmit(e);
            }}
          >
            <Input
              label="Descrição"
              placeholder="Digite aqui sua descrição"
              type="text"
              id="description"
              value={description}
              setValue={setDescription}
              helpText="Ex: Compra de roupas"
            />
            <Input
              label="Valor (R$)"
              placeholder="1"
              type="number"
              id="value"
              value={value}
              setValue={setValue}
            />
            <SelectInput
              label="Tipo de Entrada"
              options={typeOptions}
              value={typeValue}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            <button type="submit">Inserir valor</button>
          </form>
          {transactions.length > 0 && 
          <Total transactions={transactions} />
          }
        </section>

        <section>
          <FinanceList removeTransaction={removeTransaction} transactions={transactions} />
        </section>
      </div>
    </>
  );
};
export default Form;
