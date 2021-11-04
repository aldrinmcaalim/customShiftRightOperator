/*
console.log(3777 >> 6);
outputs => 59
*/

function customShiftRight(first, second) {
    return Math.floor(first/(2 ** second));
};

console.log(customShiftRight(80,3));
console.log(customShiftRight(-24,2));
console.log(customShiftRight(-5,1));
console.log(customShiftRight(4666,6));
console.log(customShiftRight(3777,6));
console.log(customShiftRight(-512,10));