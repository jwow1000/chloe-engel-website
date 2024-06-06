// import thr components
import IWant from "./AllProjects/IWant.jsx";
import Rubber from "./AllProjects/Rubber.jsx";
import Welter from "./AllProjects/Welter.jsx";
import Organ from "./AllProjects/Organ.jsx";

// import the prview images
import rubImg from "../../assets/photos/rubber/rubber_poster.jpg";
import iWantImg from "../../assets/photos/IWantToBe/screenHack.png";
import welterImg from "../../assets/photos/Welter2_051.jpg";
import organImg from "../../assets/photos/TheOrgan/screenHack.png";

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
  { 
    name: 'welter',
    route: 'welter',
    image: welterImg,
    date: 'March 10-12 2021'
  }, 
  { 
    name: 'The Organ',
    route: 'theOrgan',
    image: organImg,
    date: 'June 2021'
  }, 
];


export { Rubber, IWant, Welter, Organ}
 