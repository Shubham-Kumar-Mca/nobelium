var isValid = function(s) {
    let stack = []
    const symbole = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }

    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(char in symbole){
            let topElement = stack.pop() || "#"
            if(topElement != symbole[char]){
                return false
            }
        }else{
            stack.push(char)
        }
    }
    return stack.length === 0;
}
const x1 = isValid("()");
const x2 = isValid("(}");
const x3 = isValid("()[]{}");
console.log(x1);
console.log(x2);
console.log(x3);