
/**
 * 素数筛
 * @param max 
 */
function sieveOfEratosthenes(max: number): number[] {
    const bArr = [];
    const dive = Math.sqrt(max);
    for (let p = 2; p <= dive; p++) {
        
        if (bArr[p] === true) continue;
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