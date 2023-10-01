import FinanceCard from "../financeCard";
import styles from "./styles.module.scss";

const FinanceList = ({ transactions }) => {
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
              <FinanceCard transaction={transaction} />
            </div>
          ))
        ) : (
          <p>Você ainda não possui nenhum lançamento</p>
        )}
      </ul>
    </div>
  );
};
export default FinanceList;
