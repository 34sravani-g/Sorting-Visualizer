const HeapSort = (array)=> {
    let tempArray = array;
    const animations = [];
    HeapSortHelper(tempArray,animations)
    return animations
}

function HeapSortHelper(array,animations) {
    buildMaxHeap(array,animations);
      for(let endIdx = array.length-1;endIdx > 0;endIdx--){
          swap(0,endIdx,array);
          animations.push(['swap',endIdx,array[endIdx],0,array[0]]);
          animations.push(['swap',endIdx,array[endIdx],0,array[0]]);
          siftDown(0,endIdx-1,array,animations);
      }
  }
  function buildMaxHeap(array,animations){
      const firstParentIdx = Math.floor((array.length - 2)/2);
      for(let currentIdx = firstParentIdx;currentIdx >=0;currentIdx--){
          siftDown(currentIdx,array.length-1,array,animations);
      }
  }
  
  function siftDown(currentIdx,endIdx,heap,animations){
      let childOneIdx = currentIdx *2 +1;
      while(childOneIdx <= endIdx){
          
          const childTwoIdx = currentIdx * 2 +2 <= endIdx ? currentIdx * 2 + 2 : -1;
          let idxToSwap;
          if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]){
              idxToSwap = childTwoIdx;
          }else{
              idxToSwap = childOneIdx;
          }
          animations.push(['cmp',idxToSwap,currentIdx])
          animations.push(['cmp',idxToSwap,currentIdx])
          if(heap[idxToSwap] > heap[currentIdx]){
              swap(currentIdx,idxToSwap,heap);
              animations.push(['swap',idxToSwap,heap[idxToSwap],currentIdx,heap[currentIdx]]);
              animations.push(['swap',idxToSwap,heap[idxToSwap],currentIdx,heap[currentIdx]]);
              currentIdx = idxToSwap;
              childOneIdx = currentIdx * 2 + 1;
          }else{
              return;
          }
      }
  }
  function swap(i,j,array){
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
  }

  export default HeapSort;