import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { info } from "./projectIdx.js";
import LoadingPlaceholder from "../../components/LoadingPlaceholder/LoadingPlaceholder.jsx";
import styles from "../../ui/global.module.css";
import projStyles from "../../ui/projects.module.css";

function Projects() {
  const LazyImage = lazy(() => import("../../components/LazyImage/LazyImage.jsx"));
  
  return (
    <div className={styles.rootLayout}>
      <div className={styles.header}> Projects: </div>
      <br />
        <div className={projStyles.container}>
          {info.map((item, idx) => (
            <Suspense 
              fallback={<LoadingPlaceholder />}
              key={`linksProjects${idx}`}
            >
              <Link 
                to={item.route} 
                className={projStyles.links}
              >
                {item.name}
                <div 
                  className={projStyles.imgContainer}
                >
                    <LazyImage 
                      src={item.image} 
                      alt="random pics who knows sorry" 
                    />
                  
                </div>
              </Link>
            </Suspense>
          ))}
        </div>

    </div>
  )
}

export default Projects