function isPal(txt){
    var len = txt.length;
    for(k=1;k<=len;k++){
            if(txt[k-1]!=txt[len-k]){
                return false;
            }        
    }
    return true;
}

var low = 100;
var high = 999;
var testStr;
var ar = [];

for(i=100;i<999;i++){
    for(j=100;j<999;j++){
        testStr = (i*j).toString();
        if(isPal(testStr) === true){
            ar[ar.length]=i*j;
        }
    }
}
console.log(Math.max.apply(Math,ar));