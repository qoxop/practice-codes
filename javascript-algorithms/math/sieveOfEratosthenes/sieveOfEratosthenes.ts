
/**
 * 素数筛
 * @param max 
 */
export default function sieveOfEratosthenes(max: number): number[] {
    const bArr = [];
    const dive = Math.sqrt(max);

    // 排除所有的非素数，剩下的就是素数
    for (let p = 2; p <= dive; p++) {
        // 跳过已经至为 false 的数
        if (bArr[p] === false) continue;

        let s = p;
        let m = s * p;
        while(m <= max) {
            bArr[m] = false; // 设置为 false， 确保该位置的数不是素数
            s++;
            m = s*p
        }
    }
    const res = [2];
    for (let i = 3; i <= max; i++) {
        if (bArr[i] !== false) { // 该位置的值不为 false 就是素数
            res.push(i);
        }
    }
    return res;
} 