
/**
 * 素数筛
 * @param max 
 */
function sieveOfEratosthenes(max: number): number[] {
    const bArr = [];
    const dive = Math.sqrt(max);
    for (let p = 2; p <= dive; p++) {
        // 跳过已经至为 false 的数
        if (bArr[p] === false) continue;
        let s = p;
        let m = s * p;
        while(m < max) {
            bArr[m] = true;
            s++;
            m = s*p
        }
    }
    return []
}