
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
        if(x % 2 === 0 ){
            return true;
        } else {
            return false;
        }
    };
    
    const odd = function(y){
        if(y % 2 === 1){
            return true
        } else {
            return false;
        }
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
