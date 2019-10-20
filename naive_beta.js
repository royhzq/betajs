// A naive implementation of the Beta probability density function
// Higher values of a, b will return NaN value due to the use of factorials that
// generate large integers.
// For implementation without factorials, see beta.js
// Roy Hung 2019

function naiveBetaPDF(x, a, b) {
    // Naive implementation of the beta pdf function
    // Using factorials
    return Math.pow(x, a-1)*Math.pow(1-x, b-1)/naiveBetaFunc(a,b)
}
function naiveBetaFunc(a ,b) {
    // Naive implementation of the beta function
    // using factorials
    return factorial(a-1)*factorial(b-1)/factorial(a+b-1)
}
function factorial(x) { 
    if (x === 0) {
        return 1;
    }
    return x * factorial(x-1);     
}

// console.log(naiveBetaPDF(x=0.5, a=10, b=10))     // 3.5239410400390625
// console.log(naiveBetaPDF(x=0.5, a=100, b=100))   // NaN
// console.log(naiveBetaPDF(x=0.5, a=1000, b=1000)) // NaN
