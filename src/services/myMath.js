// get a random integer
export const randomInt = (min,max) => {
  const answer = Math.floor( ( Math.random() * (max-min) ) + min );
  return answer;
}

// export const randomList = (num) => {
//   const arr = [];
//   for(let i=0; i<num; i++) {
//     const rand = randomInt(0,num-1);
//     if(arr.includes(rand)) {

//     }
//     arr[i] = 0;
//   }
// }
