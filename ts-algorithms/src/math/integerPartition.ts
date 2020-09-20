/*
 * @Author: 张集伟
 * @Date: 2020-09-09 13:07:37
 * @LastEditTime: 2020-09-09 14:04:18
 * @LastEditors: 张集伟
 * @Description: 整数分解算法
 * @FilePath: \practice-codes\javascript-algorithms\math\integerPartition.ts
 */
export default function integerPartition(number: number): number {
    const partitionMatrix = Array(number + 1).fill(null).map(() => {
      return Array(number + 1).fill(null);
    });
    for (let x = 1; x <= number; x += 1) {
      partitionMatrix[0][x] = 0;
    }
  

    for (let y = 0; y <= number; y += 1) {
      partitionMatrix[y][0] = 1;
    }
    for (let y = 1; y <= number; y += 1) {
      for (let x = 1; x <= number; x += 1) {
        if (y > x) {
          partitionMatrix[y][x] = partitionMatrix[y - 1][x];
        } else {
          const combosWithoutSummand = partitionMatrix[y - 1][x];
          const combosWithSummand = partitionMatrix[y][x - y];
          partitionMatrix[y][x] = combosWithoutSummand + combosWithSummand;
        }
      }
    }
    return partitionMatrix[number][number];
  }