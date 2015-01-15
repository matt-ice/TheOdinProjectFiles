var result=0;
var fib = [1,2];
while(fib[fib.length-1]<4000000){
    fib[fib.length]=fib[fib.length-1]+fib[fib.length-2];
}
for(i=0;i<fib.length;i++){
    if(fib[i]%2 === 1){
        fib[i]=0;
    }
    result+=fib[i];
}
console.log(result);