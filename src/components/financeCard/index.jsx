import styles from "./styles.module.scss";

const FinanceCard = ({ transaction }) => {
  return (
    <li className={styles.cardContainer}>
      <h3>{transaction.description}</h3>
      <div>
        <p>R${transaction.value}</p>
        <button>Excluir</button>
      </div>
      <p>{transaction.type}</p>
    </li>
  );
};

export default FinanceCard;
