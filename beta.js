// Implementation of the Beta probability density function
// Without the use of factorials to overcome the problem of getting inf values
// No external libraries required
// For naive implementation, see beta_naive.js
// Roy Hung 2019


function betaPDF(x, a, b) {
    // Beta probability density function impementation
    // using logarithms, no factorials involved.
    // Overcomes the problem with large integers
    return Math.exp(lnBetaPDF(x, a, b))
}
function lnBetaPDF(x, a, b) {
        // Log of the Beta Probability Density Function
    return ((a-1)*Math.log(x) + (b-1)*Math.log(1-x)) - lnBetaFunc(a,b)
}
function lnBetaFunc(a, b) {
	// Log Beta Function
	// ln(Beta(x,y))
    foo = 0.0;

    for (i=0; i<a-2; i++) {
        foo += Math.log(a-1-i);
    }
    for (i=0; i<b-2; i++) {
        foo += Math.log(b-1-i);
    }
    for (i=0; i<a+b-2; i++) {
        foo -= Math.log(a+b-1-i);
    }
    return foo
}
function betaFunc(x,y) {
    // Beta Function
    // Beta(x,y) = e^(ln(Beta(x,y))
    return Math.exp(lnBetaFunc(x,y));
}

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