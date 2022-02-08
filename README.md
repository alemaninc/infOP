# infOP
A large number library that you can copy-paste directly into your .js file. It is easier to use than traditional libraries, is not very laggy (my game Exotic Matter Dimensions uses it and the lag is minimal) and only takes up around 100 lines of code (60 if you are using Fundamental).

infOP, similarly to logarithmica.numerus by Aarex Tiaokhiao, stores each number as a logarithm - for example, the number 149600000 is stored as 8.174931594. This allows numbers to go up to 1e1.79e308. The built-in functions make it easy to add, subtract and format these "exponents".

infOP is split into Fundamental and Advanced versions. The Fundamental version only includes necessary functions and is easier to use, whereas the Advanced version includes a lot more functions, but is a lot longer and the documentation is harder to navigate.

In this documentation and function names, the prefix ```norm``` indicates an ordinary number (```5``` means ```5```) and the prefix ```inf``` indicates a logarithm variable (```5``` means ```100000```)

## Fundamental Functions
### infAdd
This function adds two "exponents". For example, ```infAdd(1.743,0.296)``` will return log(10^1.743+10^0.296), which is 1.758245417.

Syntax: ```infAdd(x,y)``` where ```x``` and ```y``` are the exponents you want to add
### infSubtract
This function subtracts two "exponents". For example, ```infSubtract(1.758,0.296)``` will return log(10^1.758-10^0.296), which is 1.742745812.

Syntax: ```infSubtract(x,y)``` where ```y``` is the exponent you want to subtract from ```x```.
### infFormat
This function formats an "exponent" as an ordinary number. For example, ```infFormat(33.374,false)``` will return 2.36e33, ```infFormat(23.456,false)``` will return 287.57 Sx and ```inf(1.4,false)``` will return 25.

Syntax: ```infFormat(x,decimal)``` where ```x``` is the number you want to format and ```decimal``` is a boolean - if ```decimal``` is enabled, numbers below 10 will retain 2 decimal points instead of being rounded down. So:

```infFormat(0.75,true)``` returns 5.62 (helpful for when you want accurate values, for example upgrade effects)

```infFormat(0.75,false)``` returns 5 (helpful for when you want integer values, for example styling currency)

```infFormat(1.3,true)``` returns 19 (```decimal``` only rounds numbers below 10)

NOTE: infFormat uses mixed scientific notation by default, meaning numbers between 1e3 and 1e33 are formatted with Antimatter Dimensions standard notation by default. Instructions for how to remove this feature can be found in ```infOP.js```, line 24.

NOTE 2: This version of infOP does not support formatting of very large numbers (> 10^1M), this feature will come in the future.
### normFormat
This function is identical to infFormat, but treats the input as if it were a normal number. So ```normFormat(2**256)``` returns 1.15e77 instead of e1.15e77.
normFormat only starts using mixed scientific notation past 10000 instead of 1000, so ```normFormat(1753)``` still returns 1753.

Also, numbers below 100 are always rounded to 2 decimal digits, so ```normFormat(31.4159265)``` returns 31.41 instead of 31.
Useful  for removing excess digits.
### timeFormat
This function formats an amount of seconds as a time - for example, ```timeFormat(0.753)``` returns ```0.753 seconds```, ```timeFormat(37)``` returns ```37 seconds``` and ```timeFormat(90123)``` returns ```1 day 1:02:03```.

This is not related to large numbers but is included as part of the code as it is useful if your game includes statistics like many popular incrementals do.
The twoDigits function formats a one-digit number as 2 digits and has very limited practical use.
## Advanced Functions
### normLinearSoftcap
This function linearly softcaps an ordinary (non-infOP) number. It takes three inputs: ```value```, ```start``` and ```power``` in the form ```normLinearSoftcap(value,start,power) ```.

```value``` is the value that is getting softcapped. For example, if the base effect of an upgrade is 10x, you would input ```10``` here.

```start``` is the start of the softcap. For example, if you want diminishing returns past 5x, you would input ```5``` here.

```power``` is how harsh the softcap is. At high values, the function's output is directly proportional to the ```power+1```th root of ```value```. For example, if you want the effect of an upgrade to be cube rooted after a certain point, you would input ```2``` here.

Unlike many softcapping functions, this function (and the other softcapping functions) see a gradual change in derivative instead of a sudden unexplained slowdown.

Examples:

```normLinearSoftcap(5.1,5,1)``` returns ```5.099019513592785```

```normLinearSoftcap(6.1,5,1)``` returns ```6```

```normLinearSoftcap(25,5,1)``` returns ```15```

```normLinearSoftcap(1000,5,0.2)``` returns ```481.03608171937344```

```normLinearSoftcap(1000,5,5)``` returns ```16.287883532425063```

Alternatively, ```power``` can be negative (for the opposite effect - a number increases faster past a certain value). **```power``` must never be less than or equal to ```-1```.**

Examples:

```normLinearSoftcap(6,5,-0.5)``` returns ```6.05```

```normLinearSoftcap(30,10,-0.5)``` returns ```40```

```normLinearSoftcap(100,10,-0.99)``` returns ```55290.40791825879```

It is recommended to use the ```Scaling``` functions for this unless one of your upgrades weakens a softcap beyond 100%.

### infLinearSoftcap
This function linearly softcaps an infOP number. It takes the same three inputs as ```normLinearSoftcap``` - ```value```, ```start``` and ```power``` and has the same structure. However, ```value``` and ```start``` are infOP exponents and so is the output. ```power``` is still a regular number and can still go below 0 (though not below -1).

Examples:

```infLinearSoftcap(0.78532983501,0.69897000433,1)``` returns ```0.7781512503820742```   (```10**0.78532983501=6.1, 10**0.69897000433=5, 10**0.7781512503820742=6)

```infLinearSoftcap(10000,10,1)``` returns ```5005.150514997832```

```infLinearSoftcap(2,1,-0.5)``` returns ```2.4807253789884878```

### LogarithmicSoftcap
This function logarithmically softcaps an ordinary (non-infOP) number. It still takes three inputs: ```value```, ```start``` and ```power``` in the form ```LogarithmicSoftcap(value,start,power)```.

```value``` is the value that is getting softcapped. For example, if the base effect of an upgrade is 10x, you would input ```10``` here.

```start``` is the start of the softcap. For example, if you want diminishing returns past 5x, you would input ```5``` here.

```power``` is how harsh the softcap is. At high values, the function's output is directly proportional to ```ln(value)**(1/power)```. For example, if you want a weak softcap, you would input a number such as 0.02 and get ```ln(value)**50``` at very high values.

```power``` cannot be negative for this function. For scaling purposes, use the linear softcaps or make your own function.

Examples:

```LogarithmicSoftcap(11,10,1)``` returns ```10.95310179804325```

```LogarithmicSoftcap(1e100,10,0.01)``` returns ```3.8154699884172203e52```

```LogarithmicSoftcap(1e100,10,10)``` returns ```21.66726703913011```

Note: This function has no equivalent for exponents as due to the laws of logarithms it would have the same outputs as this version.

### ConvergentSoftcap
This function is different from the other softcapping functions. It takes three inputs: ```value```, ```start``` and ```end```, structured as ```ConvergentSoftcap(value,start,end)```. Once ```value``` exceeds ```start```, it will approach but never reach ```end```. Useful for percentage-based upgrades (to never exceed 100%) or sometimes for other purposes.

Examples:

```ConvergentSoftcap(80,75,100)``` returns ```79.16666666666667```

```ConvergentSoftcap(100,50,100)``` returns ```75```

```ConvergentSoftcap(10000,50,100)``` returns ```99.75```

### normLinearScaling
### infLinearScaling
### normSemiexpScaling
### infSemiexpScaling
### ExponentialScaling
### SuperexpScaling

### infFloor
This function floors an infOP number. It takes one input, which is ```x``` - this is the value getting floored.

Examples:

```infFloor(0.5)``` returns ```0.47712125471966244``` (input 3.162, output 3)

```infFloor(3.1415926)``` returns ```3.1414497734004674``` (input 1385.4555604086302, output 1385)

## Other functions
Multiplication and division of exponents - This can be done by simply adding or subtracting the exponents. Just as ```(10**7)+(10**4)``` returns ```1e11```, ```7+4``` returns ```11```. Similarly, if you need to raise an infOP number to a power, you can simply type ```7*4``` to get ```28```, just as ```(10**7)**4``` returns ```28```.

twoDigits - This function has very few practical applications and only exists to be used as part of timeFormat.
