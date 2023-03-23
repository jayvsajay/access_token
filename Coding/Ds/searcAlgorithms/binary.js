function binary(arr,target){
    let leftIndex=0;
    let rightIndex=arr.length-1;
    while(leftIndex<=rightIndex){
        let mid = Math.floor((leftIndex+rightIndex)/2);
        if(target === arr[mid]){
            return mid;
        }else if(target<arr[mid]){
            rightIndex = mid -1;
        }else{
            leftIndex = mid+1;
        }
    }
    return -1;
}

console.log(binary([-3,1,4,6,8,9],4))