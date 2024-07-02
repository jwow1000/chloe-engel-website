import { useEffect, useState } from "react";
import { info } from "../Projects/projectIdx.js";
import { Link, Outlet, useLocation} from "react-router-dom";
import RandomLines from "../../components/RandomLines/RandomLines.jsx";
import LoadingSVG from "../../components/LoadingPage/LoadingPage.jsx";
import styles from "../../ui/root.module.css";


function Root() {
  const [focus, setFocus] = useState(false);
  const [tab, setTab] = useState(false);
  const [projLinks, setProjLinks] = useState(false);
  const [loadState, setLoadState] = useState(true);
  let location = useLocation();

  useEffect(() => {
    setTimeout(() => setLoadState(false), 3000);
  }, []);
  
  
  useEffect(() => {
    setTab((prev) => !prev);
  }, [location]);
  
  function handleClick(e) {
    // console.log("big guy is clicked")
    e.stopPropagation();
    setFocus((prev) => !prev);
  }
  
  function handleCanvasClick(e) {
    // console.log("canvas is clicked")
    e.stopPropagation();
    setTab((prev) => !prev); 
  }

  function handleMenuButton(e) {
    // console.log("menuButton is clicked")
    e.stopPropagation();
    setProjLinks((prev) => !prev);
  }
  
  function Menu() {
    function ProjectMenuButton() {
      
      return(
        <div 
          className={styles.links}
          onClick={ handleMenuButton }
        >
           {(projLinks) ? "projects ⇊" : "projects ⇉"}  
        </div>
      )
    }

    return(
      <div 
        className={styles.menuRoot} 
        onClick={ handleClick }
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
        <ProjectMenuButton />
        
        {
          projLinks && (
            <div className={styles.projectMenuRoot}>
              <Link to="projects" className={styles.links}> 
                ** all projects **
              </Link>
              { info.map((item, idx) => (
                <Link 
                  key={`projLinks${idx}`}
                  to={`projects/${item.route}`}
                  className={styles.links}
                >
                  {item.name}
                </Link>
              ))}
             
            </div>
          )
        }

      </div>
    )
  }

  // main return 
  return (
    <div 
      className={styles.root}
      id="main"
    >
      <div 
        className={styles.header}
        onClick={handleClick}
      >
        ☰ chloë engel
      </div>

      <div 
        className={styles.threeCanvas}
        id="randomLines"
        onClick={ handleCanvasClick }
      >
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
        onClick={ handleClick }
      >
        menu
      </div>
      {
        loadState && <LoadingSVG />
      }
      <Outlet />
    </div>
  )
}

export default Root