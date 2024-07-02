import { randomInt } from "../../services/myMath.js";
import pics from "../../assets/photos/index.js";
import globStyles from "../../ui/global.module.css";
import homeStyles from "../../ui/home.module.css";

function Home() {
  
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
                height: `${randomInt(10,40)}vw`

            }}
            >
              <img
                src={item} 
                alt="random pics who knows sorry" 
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home