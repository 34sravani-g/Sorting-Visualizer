const QuickSort = (array)=> {
	let sortedArray = array.slice()
    const animations = []
	quickSortHelper(sortedArray,0,sortedArray.length-1,animations);
	return animations

}

const quickSortHelper = (array,startIdx,endIdx,animations)=>{
	
	if(startIdx>=endIdx) return;
	const pivotIdx = startIdx;
	let leftIdx = startIdx +1;
	let rightIdx = endIdx;
	while(rightIdx >= leftIdx){
        animations.push(['cmp',pivotIdx,rightIdx,leftIdx])
        animations.push(['cmp',pivotIdx,rightIdx,leftIdx])
		if(array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]){
			swap(leftIdx,rightIdx,array);
            animations.push(['swap',leftIdx,array[leftIdx],rightIdx,array[rightIdx]])
            animations.push(['swap',leftIdx,array[leftIdx],rightIdx,array[rightIdx]])

		}
		if(array[leftIdx]<=array[pivotIdx])leftIdx++;
		if(array[rightIdx] >= array[pivotIdx]) rightIdx--;
	}
	swap(pivotIdx,rightIdx,array)
    animations.push(['swap',pivotIdx,array[pivotIdx],rightIdx,array[rightIdx]])
    animations.push(['swap',pivotIdx,array[pivotIdx],rightIdx,array[rightIdx]])
	const leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx -(rightIdx + 1)
	if(leftSubarrayIsSmaller){
		quickSortHelper(array,startIdx,rightIdx-1,animations)
		quickSortHelper(array,rightIdx+1,endIdx,animations);
	}
	else{
		quickSortHelper(array,rightIdx+1,endIdx,animations);
		quickSortHelper(array,startIdx,rightIdx -1,animations);
	}
}

const swap = (i,j,array)=>{
	let temp = array[j]
	array[j] = array[i]
	array[i] = temp
}

export default QuickSort;