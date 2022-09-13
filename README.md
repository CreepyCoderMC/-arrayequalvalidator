# Array Equal Validator
This module is small but easy to use. The purpose of this module is to check if the source array contains the complete target value, and optionally can compare not case sensitive words as well. 
## Validation Processes
The code checks that the source array equals the target value.
### Compare method 1
The code checks that the source array equals the target value, which must be case sensitive.
### Compare method 2
The code checks that the source array equals the target value, which must not be case sensitive.
## Code Sample
This following code is to tested that all methods correctly functions as intended, is also provided in this module.
```
import { arrayEqual } from '@teamcoder/arrayequalvalidator';

console.log( "Testing Condition  1 Passed = " + !arrayEqual( [ "Hallo" , "World" ] , "world" , true            ) );
console.log( "Testing Condition  2 Passed = " + arrayEqual(  [ "Hallo" , "World" ] , "world" , false           ) );
console.log( "Testing Condition  3 Passed = " + arrayEqual(  [ "Hallo" , "World" ] , "World" , true            ) );
console.log( "Testing Condition  4 Passed = " + arrayEqual(  [ "Hallo" , "World" ] , "World" , false           ) );
console.log( "Testing Condition  5 Passed = " + !arrayEqual( [ "Hallo" , "World" ] , "Beams"                   ) );
console.log( "Testing Condition  6 Passed = " + !arrayEqual( [ "Hallo" , "World" ] , "beans"                   ) );
console.log( "Testing Condition  7 Passed = " + ( arrayEqual( "Hallo World" , "beans" ) == null ? true : false ) );
```
The results will look as follows
```
Testing Condition  1 Passed = true
Testing Condition  2 Passed = true
Testing Condition  3 Passed = true
Testing Condition  4 Passed = true
Testing Condition  5 Passed = true
Testing Condition  6 Passed = true
Testing Condition  7 Passed = true
```
## Function Parameters
### Parameters Passed
```
@param  { Array          }  source           The source value to compare
@param  { Any            }  target           The target value to compare
@param  { Boolean        }  caseSensitive    If the check must be case sensitive ( optional , default = true )
```
### Parameters Returned
```
@return { Boolean         }                  Validation passed or failed
@return { Null            }                  Source is not an array if null is returned
```
## Notes Before You Start
Very important to remember to always include the following in your main project package.json file:
```
"type": "module"
```
Without this entry in the package file you will get the following error if you try to run your project
```
(node:15500) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use 'node --trace-warnings ...' to show where the warning was created)
C:\Users\ ... \arrayequalvalidator\arrayequalvalidator.js:1
import { arrayequalvalidator } from '@teamcoder/arrayequalvalidator';
```
## Version History
| Version  | Date                   | Remark                                                                                                |
|----------|------------------------|-------------------------------------------------------------------------------------------------------|
| 1.0.0    | 13 September 2022      | Official first release                                                                                |
| 1.0.1    | 13 September 2022      | test.js fixed                                                                                         |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/biggervalidator
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
BiggerValidator © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)