const selectionSort=(array)=>{
    let sortedArray = array.slice();
    let animations = [];
    let startIdx = 0;
    while(startIdx < sortedArray.length-1){
        let smallestIdx = startIdx;
        for(let i = startIdx + 1;i < sortedArray.length;i++){
            animations.push(['cmp',smallestIdx,i])
            animations.push(['cmp',smallestIdx,i])
            if(sortedArray[smallestIdx] > sortedArray[i]) smallestIdx = i;
        }
        swap(sortedArray,smallestIdx,startIdx);
        animations.push(['swap',smallestIdx,sortedArray[smallestIdx],startIdx,sortedArray
        [startIdx]])
        animations.push(['swap',smallestIdx,sortedArray[smallestIdx],startIdx,sortedArray
        [startIdx]])
        startIdx++;
    }
    return animations;
  }
  const swap = (array,i,j)=>{
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }

export default selectionSort
  