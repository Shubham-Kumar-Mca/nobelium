var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return ""
    }

    let prefix = strs[0];
    for(let i = 0; i < prefix.length; i++){
        while(strs[i].indexOf(prefix) != 0){
            prefix = prefix.slice(0, prefix.length - 1);
            if(prefix === ""){
                return ""
            }
        }
    }
    return prefix
}
const x1 = longestCommonPrefix(["flower","flow","flight"]);
const x2 = longestCommonPrefix(["dog","racecar","car"]);

console.log(x1);
console.log(x2);