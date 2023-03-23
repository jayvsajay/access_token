var a=[12,10,30,5,29];
var b= a.reduce((prev,acc)=>{
return prev<acc?prev:acc
})
console.log(b)

var ele = 234;
var rev=0;
while(ele>0){
    rev=rev*10+ele%10;
    ele=parseInt(ele/10);
   
}
console.log(rev);
var first=-1;
var second=-1;
for(let i=0;i<=a.length-1;i++){
    if(first<a[i]){
        second=first;
        first=a[i]
    }else
    if(a[i]>second && a[i]!==first ){
        second=a[i]
    }
}
console.log(first)
console.log(second)