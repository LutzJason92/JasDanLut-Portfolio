"use client";
import Nav from "react-bootstrap/Nav";
// import styles from "./navBar.module.css";

// const links = [
//   {
//     id: 1,
//     title: "About",
//     url: "/about",
//   },
//   {
//     id: 2,
//     title: "Connect",
//     url: "/connect",
//   },
//   {
//     id: 3,
//     title: "Documents",
//     url: "/documents",
//   },
//   {
//     id: 4,
//     title: "Portfolio",
//     url: "/portfolio",
//   },
// ];

const NavBar = () => {
  return (
    <>
    <Nav className={styles.navBar} activeKey="/about">
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
    </Nav>
    </>
  );
};

// export default NavBar;

// <div className={styles.container}>
//       <div className={styles.name}>
//         <Link href="/">Jason Daniel Lutz</Link>
//       </div>
//       <div className={styles.tabCluster}>
//         <TabPane>
//         <div className={styles.tabButtons}>
//           {links.map((link) => (
//             <Tab
//               key={link.id}
//               href={link.url}
              
//             >
//               {link.title}
//             </Tab>
//           ))}
//         </div>
//         </TabPane>
//       </div>
//       <button
//       className={styles.loginOut}
//         onClick={() => {
//           console.log("logged out");
//         }}
//       >
//         logout
//       </button>
//     </div>