function linear(arr,target){
for(let i=0;i<=arr.length;i++){
    if(arr[i]===target){
        return true
    }
}
return -1
}
console.log(linear([-2,23,4,15,7],9))