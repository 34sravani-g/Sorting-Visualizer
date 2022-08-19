import React, { Component } from 'react'
import './SortingVisualizer.css'
import BubbleSortAnimation from '../Animations/BubbleSortAnimation';
import InsertionSortAnimation from '../Animations/InsertionSortAnimation';
import SelectionSortAnimations from '../Animations/SelctionSortAnimations';
import MergeSortAnimation from '../Animations/MergeSortAnimation';
import QuickSortAnimation from '../Animations/QuickSortAnimation';
import HeapSortAnimation from  '../Animations/HeapSortAnimations';
import Play from '../Controls/play'
import MergeSortDescription from '../Description/MergeSortDescription';
import QuickSortDescription from '../Description/QuickSortDescription';
import HeapSortDescription from '../Description/HeapSortDescription'
import BubbleSorttDescription from '../Description/BubbleSortDescription';
import SelectionSorttDescription from '../Description/SelectionSortDescription';
import InsertionSorttDescription from '../Description/InsertionSortDescription';
import Default from '../Description/Default';






class SortingVisualizer extends Component{

    
    constructor(props){
        super(props)
        this.state ={
            play:true,
            desc:''
        }
    }
    
    Sort(){
        // this.setState({play:false})
        // this.RenderDescription.bind(this)
        // this.props.play(true)
        switch(this.props.algo){
    
            case 'merge': 
                 MergeSortAnimation(this.props.array,this.props.speed)
                 setTimeout(()=>{
                     this.setState({play:true})
                 },Math.ceil(Math.log(this.props.size)*10000))
                //  this.setState({play:true})
                return 
            case "bubble":
                // const n = (this.props.size)*(this.props.size+45)
                // console.log(n)
                // const speed = this.props.speed
                // const delay = (n*(n-1)/2)*(50/speed)
                // console.log(delay)
                BubbleSortAnimation(this.props.array,this.props.speed)
                // setTimeout(()=>{
                //     this.setState({play:true})
                // },delay)
                return
            case "insertion":
                InsertionSortAnimation(this.props.array,this.props.speed)
                setTimeout(()=>{
                    this.setState({play:true})
                },Math.ceil(((this.props.size)*((this.props.size)+1))*10))
                return
            case 'selection':
                SelectionSortAnimations(this.props.array,this.props.speed)
                setTimeout(()=>{
                    this.setState({play:true})
                },Math.ceil(((this.props.size)*((this.props.size)+1)/2)*10))
                return
            case 'quick':
                QuickSortAnimation(this.props.array,this.props.speed)
                setTimeout(()=>{
                    this.setState({play:true})
                },Math.ceil(((this.props.size)*((this.props.size)+1))*10))
                return
            case 'heap':
                HeapSortAnimation(this.props.array,this.props.speed)
                setTimeout(()=>{
                    this.setState({play:true})
                },Math.ceil(((this.props.size)*((this.props.size)+1))*10))
                return
            default :
                return this.props.array            
                  
        }


    }
    
    RenderDescription(){
        if(this.props.algo){
            switch(this.props.algo){
                case "merge":
                    return <MergeSortDescription/>
                case "selection":
                    return <SelectionSorttDescription/>
                case "insertion":
                    return <InsertionSorttDescription/>
                case "bubble":
                    return <BubbleSorttDescription/>
                case "quick":
                    return <QuickSortDescription/>
                case "heap":
                    return <HeapSortDescription/>
                default:
                    return <Default/>
            }

        }
        else{
            return <Default/>
        }
        
    }
     selectionSort(){
        //  InsertionSortAnimation(this.props.array)
        // let result = QuickSort(this.props.array)
        // console.log(result)
        // let check = this.props.array.sort((a,b)=> a-b)
        // console.log(result)
        // console.log(check)
        // console.log(result===check)
     }

    componentDidMount(){
        this.RenderDescription()
       
    }
    render(){
        // console.log(this.props.speed)
        return(
            <React.Fragment>
            {/* <Sidebar
            array = {(array)=>{this.setState({array:array})}}
            maxSize = {(maxval)=>{console.log("sv comp",maxval);this.updateArray(maxval)}}
            /> */}
            <div className="sorting_visualizer">
                <div className="container sorting_visualizer_body">
                    <div className="array_container" style={{alignItems:`${this.props.visual}`}}>
                        {this.props.array.map((value,idx)=>{
                            return(
                                <div style={{height:`${value}px`,width:`${this.props.size}px`,backgroundColor:'#18d26e'}} className="array_bar" key={idx}>
                                </div>
                            )
                        })}
                    </div>
                    <div className="controls">
                        <div className="play"  style={{display:"block"}} onClick={this.Sort.bind(this)} >
                            <Play />
                        </div>
                        
                        {/* <button onClick={this.selectionSort.bind(this)}>Selection</button> */}
                    </div>
                    <div className="description_container">
                        {
                            this.RenderDescription()
                        }
                        {/* <Default/>
                        <MergeSortDescription/>
                        <BubbleSorttDescription/>
                        <SelectionSorttDescription/>
                        <InsertionSorttDescription/> */}
                    </div>

                </div>
                
            </div>
            
        </React.Fragment>
        )
    }
}
// export default function SortingVisualizer(props) {

//     const [play,setPlay] = useState(false)
//     console.log(props)
    
//     const Sort= ()=>{
//         switch(props.algo){
           
//             case 'merge': 
//                 return MergeSortAnimation(props.array)
//             default :
//                  return props.array
//         }
//     }
//     return (

//             <React.Fragment>
//                 {/* <Sidebar
//                 array = {(array)=>{this.setState({array:array})}}
//                 maxSize = {(maxval)=>{console.log("sv comp",maxval);this.updateArray(maxval)}}
//                 /> */}
//                 <div className="array_container">
//                     {props.array.map((value,idx)=>{
//                         return(
//                             <div style={{height:`${value}px`,width:`${props.size}px`,backgroundColor:'teal'}} className="array_bar" key={idx}>
//                             </div>
//                         )
//                     })}
//                 </div>
//                 <div className="controls">
//                     <div className="play" onClick={Sort} >
//                         <Play />
//                     </div>
//                 </div>
//             </React.Fragment>
                    
//         )
// }


export default SortingVisualizer;



// import React, { Component } from 'react'
// import Sidebar from '../navbar/Sidebar';

// export default class SortingVisualizer extends Component {

//     constructor(props){

//         super(props)
//         this.state={
//             array :[],
//             maxSize:100
//         }
//     }
    
//     componentDidMount(){
//         this.GenerateArray()
//     }

//     GenerateArray(){
//          const array = []
//          let max = this.state.maxSize
//          for(let i =0 ;i < max;i++){
//              array.push(this.RandomNumber(10,300))
//          }
//          this.setState({array:array})
         
//     }
//     RandomNumber(min,max){

//         return Math.floor(Math.random()*(max-min+1)+min)
//     }
//     updateArray(size){
//         console.log(size)
//         this.setState({maxSize:parseInt(size)})
//         this.GenerateArray.bind(this)

//     }
//     render() {
//         // console.log(this.state.maxSize)
//         return (
//             <React.Fragment>
//                 {/* <Sidebar
//                 array = {(array)=>{this.setState({array:array})}}
//                 maxSize = {(maxval)=>{console.log("sv comp",maxval);this.updateArray(maxval)}}
//                 /> */}
//                 <div className="array_container">
//                     {this.state.array.map((value,idx)=>{
//                         return(
//                             <div style={{height:`${value}px`}} id="array_bar" key={idx}>
        
//                             </div>
//                         )
//                     })}
//                 </div>
//             </React.Fragment>
            
//         )
//     }
// }



// console.log("rendered SV comp")
    // const Sort = ()=>{
    //   const animations = MergeSort(props.array)
    //   const arrayBars = document.getElementsByClassName('array_bar');
    // //   console.log(arrayBars)
    //   for(let i =0 ;i < arrayBars.length;i++){
    //     //   console.log(arrayBars[i].style.backgroundColor)
    //   }
    //   for(let i =0 ;i< animations.length ; i++){

    //     // const arrayBars = document.getElementsByClassName('array_bar');
    //     const colorChange = i%3 !==2;
    //     // console.log(animations[i])
    //     if(colorChange){

    //         const [barOneIdx , barTwoIdx] = animations[i];
    //         // console.log("--------",barOneIdx,barTwoIdx)
    //         const barOneStyle = arrayBars[barOneIdx].style;
    //         const barTwoStyle = arrayBars[barTwoIdx].style;
    //         const color = i%3===0 ? ['blue','yellow']:['teal','teal']
    //         setTimeout(() => {
    //             barOneStyle.backgroundColor = color[0];
    //             barTwoStyle.backgroundColor = color[1];
    //           }, i * 10);
    //     }
    //      else {
    //           setTimeout(() => {
    //             const [barOneIdx, newHeight] = animations[i];
    //             const barOneStyle = arrayBars[barOneIdx].style;
    //             barOneStyle.height = `${newHeight}px`;
    //           }, i * 10);
    //         }
    //   }
    // //   const sortedArray = props.array.sort((a,b)=>a-b)
    // //   console.log("mergerd result -----",Resultarray)
    // //   console.log("inbuilt result -----",sortedArray)
    // //   console.log(Resultarray === sortedArray)

    // }