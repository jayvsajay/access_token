var str='vinaay';
let a='';
let b='';
let count=0;
for(let i=0;i<str.length;i++){
    if(!a.includes(str[i])){
        a+=str[i];
    }
    else{
        b+=str[i];
        count=count+1;
    }
}
console.log(a);
console.log(b)




