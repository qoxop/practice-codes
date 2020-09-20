// 一个数，除了 1 和 本身 外不能被其他任何整数整除（1不是素数），这样数称为素数

/**
 * 素数筛
 * @param num 
 */
export default function trialDivision(num: number): boolean {
    // 特殊数字
    if (num === 2 || num === 3) return true;

    // 排除非整数、偶数 
    if (num % 1 !== 0 || num % 2 === 0) return false;

    // 取平方根
    const dive = Math.sqrt(num);

    // 平方根不为整数
    if (dive % 1 === 0) return false;

    // 假设 num 是一个矩形的面积， num = a * b; a、b均为正整数，a 从一个开始递增，b从num开始递减，a = b 时
    // a = b = dive，过了这个点，a 将大于 b，a 开始变成 b 之前经历过的值(此时 b 同理)，当 a 超过dive的部分为重复的
    for(let d = 3; d <= dive; d += 2) {
        if (num % d === 0) return false;
    }
    
    return true;
}