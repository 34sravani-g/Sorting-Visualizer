const BubbleSort = (array)=>{
   let sortedArray = array.slice()
   let isSorted = false;
   let counter = 0;
   const animations = []
//    console.log("unArray--",sortedArray)
   while(!isSorted){
       isSorted = true
       for(let i = 0;i<sortedArray.length-1-counter;i++){
           animations.push(['cmp',i,i+1])
           animations.push(['cmp',i,i+1])
           if(sortedArray[i]>sortedArray[i+1]){
               
               swap(sortedArray,i,i+1)
               animations.push(['swap',i,sortedArray[i],i+1,sortedArray[i+1]])
               animations.push(['swap',i,sortedArray[i],i+1,sortedArray[i+1]])
               isSorted = false
           }
       }
       counter++;
   }
//    console.log("sortedArray--",sortedArray)

//    console.log(animations)
   return animations



}
const swap =(array,i,j)=>{
   let temp = array[i]
   array[i] = array[j]
   array[j] = temp
}

export default BubbleSort