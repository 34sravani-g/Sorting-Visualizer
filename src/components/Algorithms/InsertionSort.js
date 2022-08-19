const InsertionSort =(array)=> {
	const sortedArray = array.slice()
    const animations = []
  for(let i = 0;i< sortedArray.length;i++){
		
		let j = i;
		while(j>0){
            animations.push(['cmp',j,j-1])
            animations.push(['cmp',j,j-1])
			if(sortedArray[j]<sortedArray[j-1]){
				swap(sortedArray,j,j-1);
                animations.push(['swap',j,sortedArray[j],j-1,sortedArray[j-1]])
                animations.push(['swap',j,sortedArray[j],j-1,sortedArray[j-1]])

			}
			else{
				break;
			}
			j-=1;
		}
	}
	return animations
}

const swap =(array,i,j)=>{
	const temp = array[i]
	array[i] = array[j]
	array[j] = temp
	
}

export default InsertionSort;
