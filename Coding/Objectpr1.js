function printnumbers(start,end){
console.log(start)
if(start<100){
    printnumbers((start+1),end)
}
}
printnumbers(1,100)