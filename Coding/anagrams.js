var str1="Mary";
var str2="Army";
var a =str1.toLowerCase();
var c=str2.toLowerCase();
a = a.split('').sort().join('');
c=c.split('').sort().join('');
if(a===c){
    console.log("yes")
}