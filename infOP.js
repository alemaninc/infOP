// infOP II, produced by alemaninc
function infAdd(x,y) {                 // Adds two exponents - for example, infAdd(1,0) returns 1.0414 (log(10+1)) 
  if (Math.abs(x-y)>16) {              // If the quotient of x and y is more than 1e+16, the addition is negligible
    return Math.max(x,y)
  } else {
    z = Math.min(x,y)
    return z+Math.log10(10**(x-z)+10**(y-z))
  }
}
function infSubtract(x,y) {            // Subtracts two exponents - if y is greater than x an error message is output. For example, infSubtract(1,0) returns 0.9542 (log(10-1))
  if (x-y>16) {                        // If y is less than 1/1e+16 of x, the subtraction is negligible
    return x
  } else if (x==y) {                   // If x and y are equal, 1/1e+100 is output instead of -Infinite.
    return -100
  } else if (y>x) {                    // If a negative value would be output, 0 is output instead as the library can't support negative numbers. However, the game has controls in place to make sure negative values never occur
    return 0
  } else {
    return x+Math.log10(1-10**(y-x))
  }
}
var notation="Mixed scientific"
function infFormat(x,y) {                // Formats an exponent as a regular number. For example, infFormat(1.301) returns 20 while infFormat(100.602) returns 4e+100
  if (x>=33) {
    return Math.floor(100*10**(x%1))/100+"e"+Math.floor(x)
  } else if ((x>=3) && (notation=="Mixed scientific")) {
    const endings=["K","M","B","T","Qa","Qt","Sx","Sp","Oc","No"]
    return Math.floor(100*10**(x%3))/100+" "+endings[Math.floor(x/3)-1]
  } else if ((x<1)&&y) {                 // If parameter y is true, 2 decimal digits are displayed if the number is less than 10. If not, the value is always an integer
    return Math.floor(10**x*100)/100
  } else {
    return Math.floor(10**x+0.00001)
  }
}
function normFormat(x) {               // Formats a regular number the same way infOperators (exponents) would be formatted
  if (x>=10000) {
    return infFormat(Math.log10(x))
  } else if (x>=100) {
    return Math.floor(x)
  } else {
    return Math.floor(x*100)/100
  }
}
function twoDigits(x) {                // Formats a one-digit number as two digits. For example, twoDigits(7) returns 07. Used in timeFormat
  x=Math.floor(x)
  if (x<10) {
    return "0"+x
  } else {
    return x
  }
}
function timeFormat(x) {               // Formats an amount of seconds as a time. For example, timeFormat(73) returns 1:13 and timeFormat(90123) returns 1 day 1:02:03
  if (x<10) {
    return Math.floor(x*1000)/1000+" seconds"
  } else if (x<60) {
    return Math.floor(x)+" seconds"
  } else if (x<3600) {
    return Math.floor(x/60)+":"+twoDigits(Math.floor(x%60))
  } else if (x<86400) {
    return Math.floor(x/3600)+":"+twoDigits(Math.floor(x/60)%60)+":"+twoDigits(Math.floor(x%60))
  } else {
    return Math.floor(x/86400)+" days "+Math.floor(x/3600)%24+":"+twoDigits(Math.floor(x/60)%60)+":"+twoDigits(Math.floor(x%60))
  }
}

// The following code is for Advanced infOP only.
function normLinearSoftcap(value,start,power) {
  return (value<start) ? value : start*(1+(power+1)*(value/start-1))**(1/(power+1))
}
function infLinearSoftcap(value,start,power) {
  return (value<start) ? value : start+infAdd(0,Math.log10(power+1)+infSubtract(value-start,0))/(power+1)
}
function LogarithmicSoftcap(value,start,power) {
  return (value<start) ? value : start*(1+Math.log(value/start)*power)**(1/power)
}
function ConvergentSoftcap(value,start,end) {
  return (value<start) ? value : end-(end-start)/(1+(value-start)/(end-start))
}
function normLinearScaling(value,start,power) {
  return (value<start) ? value : start/(power+1)*(power+(value/start)**(power+1))
}
function infLinearScaling(value,start,power) {
  return (value<start) ? value : start-Math.log10(power+1)+infAdd(Math.log10(power),(value-start)*(power+1))
}
function normSemiexpScaling(value,start,power) {
  return (value<start) ? value : 10**(Math.log10(start)*(Math.log(value)/Math.log(start))**(power+1)-Math.log10(power+1))+start*(1-1/(power+1))
}
function infSemiexpScaling(value,start,power) {
  return (value<start) ? value : infAdd(start*(value/start)**(power+1)-Math.log10(power+1),start*(1-1/(power+1)))
}
function ExponentialScaling(value,start) {
  return (value<start) ? value : start*Math.exp(value/start-1)
}
function SuperexpScaling(value,start) {
  return (value<start) ? value : start*Math.exp(Math.exp(value/start-1)-1)
}
function divergentScaling(value,start,end) {
  return (value>=end) ? 1e300 : ((value<start) ? value : start+(end-start)*((end-start)/(end-value)-1))
}
// End of infOP
