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
      <div className={styles.menuRoot} onClick={handleClick}>
        <Link to="/" className={styles.links}> 
          home
        </Link>
        <Link to="about" className={styles.links}> 
          about
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
      {
        focus && Menu()
      }

      <div className={styles.shape}></div>
      <Outlet />
    </div>
  )
}

export default Root