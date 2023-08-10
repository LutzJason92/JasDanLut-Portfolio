"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import styles from "./navBar.module.css";
const NavBar = () => {
  return (
    
    
    <Nav className={styles.navBar} activeKey="/about">
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/connect">Connect</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/documents">Documents</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      </Nav.Item>
    </Nav>
    
  );
};

export default NavBar;