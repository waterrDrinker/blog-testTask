import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="./logo-link.svg"
            alt="home"
            width={100}
            height={18}
          />
        </Link>
        <Link className={styles['login-btn']} href="#!">Log In</Link>
      </nav>
    </header>
  );
};

export default Header;
