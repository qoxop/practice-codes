import sieveOfEratosthenes from './sieveOfEratosthenes/sieveOfEratosthenes';
import trialDivision from './trialDivision/trialDivision'

if (sieveOfEratosthenes(1000).every(item => trialDivision(item))) {
    console.log('success')
} else {
    console.log('fail')
}