import sieveOfEratosthenes from './sieveOfEratosthenes/sieveOfEratosthenes';
import trialDivision from './trialDivision/trialDivision'

const arr = sieveOfEratosthenes(10000)

const nArr = new Array(10001).fill(true);

if (nArr.filter(i => trialDivision(i)).length === arr.length) {
    console.log('sss');
}