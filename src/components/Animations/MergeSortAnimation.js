
import MergeSort from "../Algorithms/MergeSort";
const MergeSortAnimation = (array,speed)=>{
  // console.log(speed)
    const animations = MergeSort(array)
    const n = animations.length
    const arrayBars = document.getElementsByClassName('array_bar');
    const play = document.getElementsByClassName('play')
    const navbar = document.getElementsByClassName('main_logo')
    const mainheader = document.getElementsByClassName('sub_header')

    mainheader[0].style.display='block'
    navbar[0].style.display='none'
    play[0].style.display = 'none'
  //   console.log(arrayBars)
    for(let i =0 ;i < arrayBars.length;i++){
      //   console.log(arrayBars[i].style.backgroundColor)
    }
    let count = 0
    for(let i =0 ;i< animations.length ; i++){

      // const arrayBars = document.getElementsByClassName('array_bar');
      const colorChange = i%3 !==2;
      // console.log(animations[i])
      if(colorChange){

          const [barOneIdx , barTwoIdx] = animations[i];
          // console.log("--------",barOneIdx,barTwoIdx)
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i%3===0 ? ['#fed219','#0092cc']:['#18d26e','#18d26e']
          // eslint-disable-next-line no-loop-func
          setTimeout(() => {
            count ++
            if(count === n){
              play[0].style.display = 'block'
              navbar[0].style.display='block'
              mainheader[0].style.display='none'
            }
              barOneStyle.backgroundColor = color[0];
              barTwoStyle.backgroundColor = color[1];
            }, i * (50/speed));
      }
       else {
            // eslint-disable-next-line no-loop-func
            setTimeout(() => {
              count ++
              if(count === n){
                play[0].style.display = 'block'
                navbar[0].style.display='block'
                mainheader[0].style.display='none'
              }
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * (50/speed));
          }
    }
  //   const sortedArray = props.array.sort((a,b)=>a-b)
  //   console.log("mergerd result -----",Resultarray)
  //   console.log("inbuilt result -----",sortedArray)
  //   console.log(Resultarray === sortedArray)

  }
  export default MergeSortAnimation;