import SideMenu from "@/components/sideMenu/SideMenu";
import style from './page.module.css';
const Portfolio = () => {
  return (
    <div>
      <div className={style.container}>
        <SideMenu />
      </div>
      <div>Portfolio</div>
    </div>
  );
};

export default Portfolio;
