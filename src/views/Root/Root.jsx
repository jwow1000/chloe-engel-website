import { useEffect, useState } from "react";
import { Link, Outlet, useLocation} from "react-router-dom";
import RandomLines from "../../components/RandomLines/RandomLines.jsx";
import styles from "../../ui/root.module.css";




function Root() {
  const [focus, setFocus] = useState(false);
  const [tab, setTab] = useState(false);

  let location = useLocation();
  useEffect(() => {
    setTab((prev) => !prev)
  }, [location]);
  function handleClick() {
    setFocus((prev) => !prev);
  }
  
  function Menu() {
    return (
      <div 
        className={styles.menuRoot} 
        onClick={handleClick}
        style={{
          left: (focus) ? "0vw" : "-80vw"
        }}
      >
        <Link to="/" className={styles.links}> 
          home
        </Link>
        <Link to="about" className={styles.links}> 
          about
        </Link>
        <Link to="rubber" className={styles.links}> 
          RUBBER
        </Link>
        <Link to="iWantToBe" className={styles.links}> 
          I Want To Be
        </Link>
      </div>
    )
  }

    
  return (
    <div className={styles.root}>
      <div 
        className={styles.header}
        onClick={handleClick}
      >
        ☰ chloë engel
      </div>

      <div className={styles.threeCanvas}>
        <RandomLines 
          amount={20}
          width={5}
          height={5}
          margin={0}
          trigger={tab}
        />
      </div>

      <Menu />
      <div 
        className={styles.sideButton}
        onClick={handleClick}
      >
        menu
      </div>

      <Outlet />
    </div>
  )
}

export default Root