# infOP
A large number library that you can copy-paste directly into your .js file. It is easier to use than traditional libraries, is not very laggy (my game Exotic Matter Dimensions uses it and the lag is minimal) and only takes up around 60 lines of code.
infOP, similarly to logarithmica.numerus by Aarex Tiaokhiao, stores each number as a logarithm - for example, the number 149600000 is stored as 8.174931594. This allows numbers to go up to 1e1.79e308. The built-in functions make it easy to add, subtract and format these "exponents".
Functions:
### infAdd
This function adds two "exponents". For example, infAdd(1.743,0.296) will return log(10^1.743+10^0.296), which is 1.758245417.
Syntax: ```infAdd(x,y)``` where x and y are the exponents you want to add
