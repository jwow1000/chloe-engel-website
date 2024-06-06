import { lazy, Suspense } from "react";
import { randomInt } from "../../services/myMath.js";
import pics from "../../assets/photos/index.js";
import LoadingPlaceholder from "../../components/LoadingPlaceholder/LoadingPlaceholder.jsx";
import globStyles from "../../ui/global.module.css";
import homeStyles from "../../ui/home.module.css";

function Home() {
  // lazy load img
  const LazyImage = lazy(() => import("../../components/LazyImage/LazyImage.jsx"));
    
  return (
    <div className={globStyles.rootLayout}>
      <div className={homeStyles.randoFlex}>
        {
          pics.map((item, idx) => (
            <div
              className={globStyles.pic}
              key={`homePics-${idx}`} 
              style={{
                width: `${randomInt(10,40)}vw`,
            }}
            >
              <Suspense fallback={<LoadingPlaceholder />}>
                <LazyImage 
                  src={item} 
                  alt="random pics who knows sorry" 
                />
              </Suspense>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home