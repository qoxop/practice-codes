import sieveOfEratosthenes from './sieveOfEratosthenes/sieveOfEratosthenes';
import trialDivision from './trialDivision/trialDivision'

const arr = sieveOfEratosthenes(10000)
console.log(arr[arr.length - 1])
if (arr.every(item => trialDivision(item))) {
    console.log('success')
} else {
    console.log('fail')
}