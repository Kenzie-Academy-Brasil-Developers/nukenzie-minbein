import logo from "../../assets/NuKenzie.svg";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <div>
          <img src={logo} alt="logo-NuKenzie" />
        </div>
      </header>
    </>
  );
};
export default Header;
