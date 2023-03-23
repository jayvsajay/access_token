var ar=[2,2,1,1,3,4,5,6];
let a=[]
for(let i=0;i<=ar.length-1;i++){
    if(!a.includes(ar[i])){
        a.push(ar[i])
    }
}
console.log(a.sort((a,b)=>a-b))

console.log(ar=ar.filter(ele=>ele!==2))



let name1={
    firstname:"Ajay",
    lastname:"VS"
}

let printName = function(){
    console.log(this.firstname,this.lastname)
}

let printmyname = printName.bind(name1);

printmyname();