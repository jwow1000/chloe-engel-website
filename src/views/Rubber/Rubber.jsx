import globStyles from "../../ui/global.module.css";

function Rubber() {
  return (
    <div className={globStyles.rootLayout}>
      <iframe 
      src="https://player.vimeo.com/video/848850416?h=48fbec9237&title=0&byline=0&portrait=0"  
      className={globStyles.video}
      
      ></iframe>
    </div>
  )
}


export default Rubber