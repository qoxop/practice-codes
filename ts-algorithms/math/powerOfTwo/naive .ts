
function isPowerOfTwo(num: number) {
    if (num < 1) return false;

    let dive = num / 2;

    while(dive % 1 === 0 && dive > 1) {
        dive = dive / 2
    }
    return dive === 1;

}