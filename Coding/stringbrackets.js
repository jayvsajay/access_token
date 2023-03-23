// function brackets(str){
//     let ar=[];
//        for(let i=0;i<=str.length;i++){
//         if(str[i]==='(' || str[i]==='['){
//             ar.push(str[i])
//         }else if(str[i]===')' && ar[ar.length-1]==='('){
//             ar.pop()
//         }else if(str[i]==='[' && ar[ar.length-1]===']'){
//             ar.pop()
//         }else{
//         return false
//         }
//        }
//        return ar.length===0;
// }
// var stri="[]";
// const p =brackets(stri)
// console.log(p)

function hasProperBrackets(str) {
    let stack = [];
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
        stack.push(str[i]);
      } else if (str[i] === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else if (str[i] === "]" && stack[stack.length - 1] === "[") {
        stack.pop();
      } else if (str[i] === "}" && stack[stack.length - 1] === "{") {
        stack.pop();
      } else {
        return false;
      }
    }
  
    return stack.length === 0;
  }
  console.log(hasProperBrackets("([]{})"));
  
  
  
  
  const num=2;
  const p = new Promise((resolve,reject)=>{
    if(num%2===0){
        reject("this is even number")
    }else{
        resolve("wrong")
    }
  })
p.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})
  