function pr(start,end){
    console.log(start)
    if(start<end){
        return pr((start+1),end)
    }

}
pr(1,100)