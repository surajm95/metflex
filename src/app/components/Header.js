import Link from "next/link";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src="/logo.jpg" alt="my logo" width={50} height={40}></Image>
          <label>METFLEX</label>
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
