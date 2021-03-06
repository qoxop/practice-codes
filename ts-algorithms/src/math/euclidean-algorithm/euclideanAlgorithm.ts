/**
 * 欧几里得算法，求最大公约数
 * 递归版
 */
export default function euclideanAlgorithm(A: number, B: number): number {
    A = Math.abs(A);
    B = Math.abs(B);
    const b = A % B;
    if (b === 0) return B;
    return euclideanAlgorithm(B, b);
  }