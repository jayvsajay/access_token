// var str = "Ajay";
// let st='';
// for(let i=str.length-1;i>=0;i--){
//     st += str[i];
// }
// console.log(st)


// console.log(stra)
// let a=[];
// for(let j=0;j<stra.length;j++){
//     let str1 = ''
//     for(let k=stra[j].length-1;k>=0;k--){
//         str1+=stra[j][k];
//     }
//     a.push(str1);
// }
// console.log(a.join(' '))


var stringa = "Welcome to this Javascript Guide!";
let stra = stringa.split(' ');
// for(let i=0;i<stra.length;i++){
   
//     stra[i] = stra[i].charAt(0).toUpperCase()+stra[i].slice(1);
   
// }
// const str2 = stra.join(' ');
// console.log(str2)


let a=[];
for(let i=0;i<stra.length;i++){
    let st=''
    for(let j=stra[i].length-1;j>=0;j--){
        st+=stra[i][j]
    }
    a.push(st)
}
console.log(a.join(' '))
