var lengthOfLastWord = function (s) {
    const arrOfStr = s.split(" ")
    let newArr = [];
    for (let i = 0; i < arrOfStr.length; i++) {
        if (arrOfStr[i] != "") {
            newArr.push(arrOfStr[i])
        }
    }

    const lastElement = newArr[newArr.length - 1].length
    return lastElement;
};

const x1 = lengthOfLastWord("Hello World");
const x2 = lengthOfLastWord("   fly me   to   the moon  ");
const x3 = lengthOfLastWord("luffy is still joyboy");

console.log(x1);
console.log(x2);
console.log(x3);