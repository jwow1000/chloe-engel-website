import globStyles from "../../../ui/global.module.css";

function Welter() {
  return (
    <div className={globStyles.rootLayout}>
      <div className={globStyles.header}> welter </div>
      <br />
      <br />
      <p className={globStyles.p}>
        Together with sound artists PussyVision (Finley Janes) the performers use song and sound—incantation and invocation—to evoke something both ancient and essential to emotional survival. Scores on attention and rhythm guide performers to look at the spaces between actions, a state where losing momentum feels important.  Friction and asymmetry, both auditory and physical, serve to scramble preconceived notions of form and otherwise inhibit this polyphonic, trancelike condition. Endowing the performers with a force unmediated by language, the spell that takes over results in an uncensored account of desire and its power.
      </p>
      <br />
      <br />
      
      <p className={globStyles.smallBold} >Performance Credits:</p>  
      <p className={globStyles.small}> 
        <span className={globStyles.spanUnderline}>Concept/direction:</span> Elena Demyanenko <br />
        <span className={globStyles.spanUnderline}>Made and performed:</span> Elena Demyanenko, Chloë Engel, and Leah Morrison <br />
        <span className={globStyles.spanUnderline}>Lights:</span> Joe Levasseur <br />
        <span className={globStyles.spanUnderline}>Choreographic contributions:</span> Jon Kinzel <br />
        <span className={globStyles.spanUnderline}>Sound:</span> Finley Janes<br />
        <span className={globStyles.spanUnderline}>Video direction:</span> Mariam Ghani<br />
        <span className={globStyles.spanUnderline}>Costumes:</span> Richard MacPike<br />
      </p>
      <br />
      <p className={globStyles.smallBold} >Performances:</p>  
      <p className={globStyles.small}>
        <span className={globStyles.spanUnderline}>Roulette</span>, Brookylyn, NY. March 10-12, 2021. <br />
        <span className={globStyles.spanUnderline}>Icebox</span>, Philadelphia, PA. (Canceled due to Covid-19) <br />
        <span className={globStyles.spanUnderline}>HERE Arts Center</span>, Manhattan, NY. February 2, 2020. <br />
        <span className={globStyles.spanUnderline}>Middlebury College</span>, Middlebury, VT. January 27-28. 2020.
      </p>
    </div>
  )
}

export default Welter