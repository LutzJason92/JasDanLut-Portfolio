import styles from "./sideMenu.module.css";

const SideMenu = () => {
  return (
    <div className={styles.container}>
      <div >
        <h3>Projects</h3>
      </div>
      <div>
        <h4>Case Studies</h4>
      </div>
      <div>
        <h4>Development</h4>
      </div>
      <div>
        <h4>Product Design</h4>
      </div>
    </div>
  );
};

export default SideMenu;
