import sieveOfEratosthenes from './sieveOfEratosthenes/sieveOfEratosthenes';
import trialDivision from './trialDivision/trialDivision'

const arr = sieveOfEratosthenes(10000)

const nArr = new Array<boolean>(10001)
console.log(nArr.filter((_, index) => trialDivision(index)).length, arr.length);
if (nArr.filter((_, index) => trialDivision(index)).length === arr.length) {
    console.log('sss');
}