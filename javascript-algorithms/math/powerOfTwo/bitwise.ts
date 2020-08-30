export default function isPowerOfTwo (num: number) {
    if (num < 1) return false;
    return (num & (num - 1)) === 0;
}