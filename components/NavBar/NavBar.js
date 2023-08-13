import Link from "next/link";
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link className={styles.logo} href="/" />

        <div className={styles.searchContainer}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Buscar..."
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
