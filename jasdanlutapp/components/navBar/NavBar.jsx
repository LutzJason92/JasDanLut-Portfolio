"use client";
import Link from "next/link";
import styles from "./navBar.module.css";

const links = [
  {
    id: 1,
    title: "About",
    url: "/about",
  },
  {
    id: 2,
    title: "Connect",
    url: "/connect",
  },
  {
    id: 3,
    title: "Documents",
    url: "/documents",
  },
  {
    id: 4,
    title: "Portfolio",
    url: "/portfolio",
  },
];

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.name}>
        <Link href="/">Jason Daniel Lutz</Link>
      </div>
      <div className={styles.tabCluster}>
        {links.map((link) => (
          <div
            className={styles.tabButtons}
            key={link.id}
          >
            <Link href={link.url}>{link.title}</Link>
          </div>
        ))}
      </div>
      <div className={styles.loginOut}>
        <button
          onClick={() => {
            console.log("logged out");
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
