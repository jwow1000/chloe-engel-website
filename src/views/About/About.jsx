import outside from "../../assets/photos/nyt_outside.webp";
import cv from "../../assets/docs/Chloe_CV_F23.pdf";
import globStyles from "../../ui/global.module.css";

function About() {
  return (
    <div className={globStyles.rootLayout}>
      <div className={globStyles.header}>chloë engel</div>
      <p className={globStyles.p}>(they/them) or (she/her)</p>
      <div className={globStyles.horiLine}></div>
      <p className={globStyles.p}>
        chloë engel is a transdisciplinary choreographer and early-childhood educator based in lenape-hoking territory (aka Brooklyn, NY). Their choreographic work explores ritual, lineages of Madness, nostalgia, and family.
        <br /><br />
        email: <br />
        chlochloengel@gmail.com
        <br />
        <br />
        vimeo: <br/>
        https://vimeo.com/chlochloengel
        <br />
        <br />
        CV: <br />
        <a href={cv} download={true} className={globStyles.links}>download ↓</a>
      </p>

      <img 
        src={outside} 
        alt="the dancer chloë engel in motion with eyes closed and mouth partially open, body tense and hands raised, captured in mid word and mid movement. Red atheltic pants, and white tank top. they are outside on the street in a city. it's sunny, mid day" 
        className={globStyles.pic}
      />
      <a href="https://www.nytimes.com/2021/07/16/arts/dance/aunts-events-nyc.html"> <small> Krissanne Johnson for The New York Times </small>  </a>
    </div>
  )
}

export default About