// Implementation of the Beta probability density function
// Without the use of factorials to overcome the problem of getting inf values
// No external libraries required
// For naive implementation, see beta_naive.js
// Roy Hung 2019


function lnBetaFunc(x,y) {
		// Log Beta Function
	  // ln(Beta(x,y))
    foo = 0.0;

    for (i=0; i<x-2; i++) {
        foo += Math.log(x-1-i);
    }
    for (i=0; i<y-2; i++) {
        foo += Math.log(y-1-i);
    }
    for (i=0; i<x+y-2; i++) {
        foo -= Math.log(x+y-1-i);
    }
    return foo
}

function betaFunc(x,y) {
		// Beta Function
    // Beta(x,y) = e^(ln(Beta(x,y))
    return Math.exp(lnBetaFunc(x,y));
}

function lnBetaPDF(x, a, b) {
		// Log of the Beta Probability Density Function
    return ((a-1)*Math.log(x) + (b-1)*Math.log(1-x)) - lnBetaFunc(a,b)
}

function betaPDF(x, a, b) {
    // Beta probability density function impementation
    // using logarithms, no factorials involved.
    // Overcomes the problem with large integers
    return Math.exp(lnBetaPDF(x, a, b))
}

