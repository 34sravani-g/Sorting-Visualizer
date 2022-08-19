
const MergeSort = (array)=>{
    const mainarray = array.slice()
    const animations = []
    const auxilaryarray = array.slice()
    if(array.length <=1){
        return array
    }
    MergeSortHelper(mainarray,0,mainarray.length -1,auxilaryarray,animations)
    
    return animations
}

const MergeSortHelper = (array,startIdx,endIdx,auxilaryarray,animations) => {

    if(startIdx === endIdx) return

    const midIdx = Math.floor((startIdx + endIdx)/2)
    MergeSortHelper(auxilaryarray,startIdx,midIdx,array,animations)
    MergeSortHelper(auxilaryarray,midIdx+1,endIdx,array,animations)
    doMerge(array,startIdx,midIdx,endIdx,auxilaryarray,animations)
    
}

const doMerge = (array,startIdx,midIdx,endIdx,auxilaryarray,animations) => {

    let k = startIdx;
    let i = startIdx;
    let j = midIdx + 1;
    while (i <= midIdx && j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, j]);
        if (auxilaryarray[i] <= auxilaryarray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxilaryarray[i]]);
        array[k++] = auxilaryarray[i++];
        } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxilaryarray[j]]);
        array[k++] = auxilaryarray[j++];
        }
    }
    while (i <= midIdx) {
        // // These are the values that we're comparing; we push them once
        // // to change their color.
        animations.push([i, i]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, i]);
        // // We overwrite the value at index k in the original array with the
        // // value at index i in the auxiliary array.
        animations.push([k, auxilaryarray[i]]);
        array[k++] = auxilaryarray[i++];
    }
    while (j <= endIdx) {
        // // These are the values that we're comparing; we push them once
        // // to change their color.
        animations.push([j, j]);
        // // These are the values that we're comparing; we push them a second
        // // time to revert their color.
        animations.push([j, j]);
        // // We overwrite the value at index k in the original array with the
        // // value at index j in the auxiliary array.
        animations.push([k, auxilaryarray[j]]);
        array[k++] = auxilaryarray[j++];
  }
}


export default MergeSort;