/**
 * 欧几里得算法，求最大公约数
 * 迭代版
 */
function euclideanAlgorithmIterative(A: number, B: number): number {
    A = Math.abs(A);
    B = Math.abs(B);
    let b = A % B;
    while(b) {
      [A, B] = [B, b];
      b = A % B;
    }
    // 不用额外变量的方式
    // while(A && B && A !== B) { 
    //   [A, B] = [B, A%B];
    // }
    // return B || A;
    return B;
  }