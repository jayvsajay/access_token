var ar = [0,1];
for(let i=2;i<=5;i++){
    ar[i]=ar[i-1]+ar[i-2]
}
console.log(ar)