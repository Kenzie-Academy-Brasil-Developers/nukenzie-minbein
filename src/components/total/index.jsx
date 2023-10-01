import React from "react";
import styles from "./styles.module.scss";

const Total = ({ transactions }) => {
  const calculateTotal = () => {
    return transactions
      .reduce((total, transaction) => {
        if (transaction.type === "Entrada") {
          return total + parseFloat(transaction.value);
        } else if (transaction.type === "Despesa") {
          return total - parseFloat(transaction.value);
        }
        return total;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Valor total: </h2>
        <p>R${calculateTotal()}</p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};

export default Total;
