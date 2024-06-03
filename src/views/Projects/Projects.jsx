import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { info } from "./projectIdx.js";
import styles from "../../ui/global.module.css";
import projStyles from "../../ui/projects.module.css";

function Projects() {
  const LazyImage = lazy(() => import("../../components/LazyImage/LazyImage.jsx"));
  
  // Placeholder while the image is loading
  const LoadingPlaceholder = () => <div>Loading...</div>;
  
  return (
    <div className={styles.rootLayout}>
      <div className={styles.header}> Projects: </div>
      <br />
      <div className={projStyles.container}>
        {info.map((item, idx) => (
          <Link 
            to={item.route} 
            key={`linksProjects${idx}`}
            className={projStyles.links}
          >
            {item.name}
            <div className={projStyles.imgContainer}>
              <Suspense fallback={LoadingPlaceholder}>
                <LazyImage 
                  src={item.image} 
                  alt="random pics who knows sorry" 
                />
              </Suspense>
              
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Projects