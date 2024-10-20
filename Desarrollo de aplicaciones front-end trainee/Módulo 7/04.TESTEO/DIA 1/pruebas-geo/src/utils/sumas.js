export const sumas = (...args) => {
    const number = [...args].map(Number)
    if (number.some(number => isNaN(number))) {
        return NaN
    } else {
        return number.reduce((a, b) => a + b, 0)
    }
}