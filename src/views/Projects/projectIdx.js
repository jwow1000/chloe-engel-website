// import thr components
import IWant from "./AllProjects/IWant.jsx";
import Rubber from "./AllProjects/Rubber.jsx";

// import the prview images
import rubImg from "../../assets/photos/rubber/rubber_poster.jpg";
import iWantImg from "../../assets/photos/IWantToBe/screenHack.png";

// an array of objects: name, route, img(preview image)
export const info = [
  { 
    name: 'RUBBER', 
    route: 'rubber',
    image: rubImg,
    date: '2024'
  }, 
  { 
    name: 'I Want To Be', 
    route: 'IWantToBe',
    image: iWantImg,
    date: '2023'
  }, 
];


export { Rubber, IWant }
 