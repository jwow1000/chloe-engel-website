import globStyles from "../../../ui/global.module.css";

function IWant() {
  return (
    <div className={globStyles.rootLayout}>

      <div className={globStyles.header}> I Want To Be </div>
      <br />
      <br />
      <p className={globStyles.smallBold} >Concept and Performance:</p>
      <p className={globStyles.small}>Chloë Engel + Anna Kroll</p>
      <br />
      <br />
      <p className={globStyles.smallBold} >Performances:</p>  
      <p className={globStyles.small}>
        Spark IV: A New World? May 2022 <br/>
        re:semblance June 25 - 27 2022, conference call <br/>
        Mind on Fire Variety Show / Current Space & Online / Baltimore, MD, October 2022
      </p>
      <br />
      <br />
      <p className={globStyles.smallBold} >Workshop: </p>
      <p className={globStyles.small}>Workshop (remote), July 10 2022, hosted by The Deep Play Institute</p>
      <br />
      <br />
      <p className={globStyles.p}>
        <span className={globStyles.spanBlue}>I Want to Be</span> is an improvised spoken dance performed via conference call. Audience members enter the conference call space and listen as an imaginary space is conjured through verbal description.
        Each space is created with the intention of being destroyed and we are in it. Like a Rube Goldberg machine, ourselves and elements in the room are animated through our description, one by one affecting each other and dismantling/degrading/destroying the space.
      </p>
      <br />
      <br />
      <div className={globStyles.insetPoem}>
        You dial the number provided on the date that you’re supposed to.<br/>
        You close your eyes and listen.<br/>
        You enter a room.<br/>
        There are other people in the room. We are in the room with you.<br/>
        We tell you how the room is built,<br/>
        What the room contains<br/>
        What contains the room<br/>
        What happens in the room<br/>
        and how it will eventually all be destroyed.<br/>
        You listen.<br/>
        <br/>
        <br/>
        Every call is a new room.
      </div>
      <br />
      <br />
      <br />
      <div >
        <iframe 
          src="https://player.vimeo.com/video/570923330?h=a05d492b24&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          className={globStyles.video}
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>

  )
}

export default IWant;