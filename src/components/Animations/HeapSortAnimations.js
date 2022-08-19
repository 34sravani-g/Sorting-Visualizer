import heapSort from "../Algorithms/HeapSort";

const HeapSortAnimations = (array,speed)=>{
    
    const animations = heapSort(array)
    const n = animations.length
    const arrayBars = document.getElementsByClassName('array_bar');
    const play = document.getElementsByClassName('play')
    const navbar = document.getElementsByClassName('main_logo')
    const mainheader = document.getElementsByClassName('sub_header')
    mainheader[0].style.display='block'
    navbar[0].style.display='none'
    play[0].style.display = 'none'
    let Cmpcounter = 1
    let Swpcounter = 1
    let count = 0
    // for(let i =0 ;i < arrayBars.length;i++){
    //     console.log(arrayBars[i].style.backgroundColor)
    //   }
    for(let i=0 ; i<n;i++){
        
        // console.log("counter---------",counter)
        const animation = animations[i]
        if(animation[0] === 'cmp'){
            const [barOneIdx,barTwoIdx] = animation.slice(1,3)
            // console.log(barOneIdx,barTwoIdx)
            const barOneStyle = arrayBars[barOneIdx].style
            const barTwoStyle = arrayBars[barTwoIdx].style
            const color = Cmpcounter%2 === 1?['#fed219','#0092cc']:['#18d26e','#18d26e']
            Cmpcounter++;
            // eslint-disable-next-line no-loop-func
            setTimeout(()=>{
                count ++
              if(count === n){
                play[0].style.display = 'block'
                navbar[0].style.display='block'
                mainheader[0].style.display='none'
              }
                barOneStyle.backgroundColor = color[0]
                barTwoStyle.backgroundColor = color[1]

            },i*(50/speed))
            
        }
        else{
            const barOneIdx = animation[1];
            const barTwoIdx = animation[3];
            const barOneHeight = animation[2];
            const barTwoHeight = animation[4];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = Swpcounter%2 === 1?["#e52c6a","#e52c6a"]:["#18d26e","#18d26e"];
            Swpcounter++;
            // eslint-disable-next-line no-loop-func
            setTimeout(()=>{
                count ++
              if(count === n){
                play[0].style.display = 'block'
                navbar[0].style.display='block'
                mainheader[0].style.display='none'
              }
                barOneStyle.height = `${barOneHeight}px`
                barTwoStyle.height = `${barTwoHeight}px`
                barOneStyle.backgroundColor = color[0]
                barTwoStyle.backgroundColor = color[1]
            },i*(50/speed))

        }
          
        // if(animation[0] === 'cmp'){
        //     const [barOneIdx,barTwoIdx] = animation.slice(1,3)
        //     console.log(barOneIdx,barTwoIdx)
        //     const barOneStyle = arrayBars[barOneIdx].style
        //     const barTwoStyle = arrayBars[barTwoIdx].style
        //     barOneStyle.backgroundColor = 'teal'
        //     barTwoStyle.backgroundColor = 'teal'
        // }
    }

}

  
export default HeapSortAnimations;