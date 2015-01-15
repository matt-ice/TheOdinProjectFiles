function isPrime(n){
    var root = Math.sqrt(n);
    for(var i=2;i<=root;i++){
        if(n % i === 0){
			return false;
		}
	}
	return true;
}

var target = 600851475143;
var root = Math.sqrt(target);
var res = [];

for(i=3;i<root;i=i+2){
    if(target%i === 0){
        res[res.length]=i;
    }
}

for(var i=0; i<res.length; i=i+1){
    if(isPrime(res[i]) === false){
        res[i]=0;
	}
}
Console.log(Math.max.apply(Math,res));