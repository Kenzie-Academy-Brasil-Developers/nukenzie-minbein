import FinanceCard from "../financeCard";
import styles from "./styles.module.scss";

const FinanceList = ({ transactions, removeTransaction }) => {

  
  return (
    <div className={styles.financeList}>
      <h2>Resumo financeiro</h2>
      <ul>
        {transactions && transactions.length > 0 ? (
          transactions.map((transaction) => (
            <div
              key={transaction.id}
              className={`${styles.transaction} ${
                transaction.type === "Entrada" ? styles.entrada : styles.saida
              }`}
            >
              <FinanceCard  removeTransaction={removeTransaction} transaction={transaction} />
            </div> 
          ))
        ) : (
          <span>Você ainda não possui nenhum lançamento</span>
        )}
       
      </ul>
    </div>
  );
};
export default FinanceList;
