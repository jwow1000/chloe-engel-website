import { useState } from "react";
import { Link, Outlet} from "react-router-dom";
import styles from "../../ui/root.module.css";

function Root() {
  const [focus, setFocus] = useState(false);
  
  function handleClick() {
    setFocus((prev) => !prev);
  }
  
  function Menu() {
    return (
      <div 
        className={styles.menuRoot} 
        onClick={handleClick}
        style={{
          left: (focus) ? "0" : "-80vw"
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