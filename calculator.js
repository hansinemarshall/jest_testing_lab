
    const sum = function(a, b){
        return a + b;
    };
    
     const subtract = function(a,b){
        return a - b;
    };
    
    const multiply = function(a,b){
        return a*b;
    };
    
    const divide = function(a,b){
        let result = (a/b).toFixed(2);
        return parseFloat(result);
    };
    
    const modulus = function(a,b){
        return a % b;
    };
    
    const even = function(x){
        // if(x % 2 === 0 ){
        //     return true;
        // } else {
        //     return false;
        // }
        // THIS CAN BE SHORTENED TO         return x % 2 === 0;

        // The solution to the extension for reusing code 
        return (modulus(x,2))=== 0;

    };
    
    const odd = function(y){
        // if(y % 2 === 1){
        //     return true
        // } else {
        //     return false;
        // }
        // THIS CAN BE SHORTENDED TO        return y % 2 !== 0;
        return (modulus(y,2))!== 0;
    };
    
    module.exports = { 
        sum, 
        subtract, 
        multiply, 
        divide, 
        modulus, 
        even, 
        odd 
    };
