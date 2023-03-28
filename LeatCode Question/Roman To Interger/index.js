var romanToInt = function(s) {
    let symboleValue = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    }

    let count = 0;
    for(let i = 0; i < s.length; i++){
        const currentSymboleValue = symboleValue[s[i]]
        const nextSymboleValue = symboleValue[s[i + 1]]
        if(nextSymboleValue && nextSymboleValue > currentSymboleValue){
            count = count-currentSymboleValue
        }else{
            count = count + currentSymboleValue
        }
    }
    return count
    
};
const x1 = romanToInt("MCMXCIV");
const x2 = romanToInt("LVIII");
const x3 = romanToInt("III");
console.log(x1);
console.log(x2);
console.log(x3);