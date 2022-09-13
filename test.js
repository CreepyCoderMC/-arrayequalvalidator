import { arrayEqual } from '@teamcoder/arrayequalvalidator.js';

console.log( "Testing Condition  1 Passed = " + !arrayEqual( [ "Hallo" , "World" ] , "world" , true            ) );
console.log( "Testing Condition  2 Passed = " + arrayEqual(  [ "Hallo" , "World" ] , "world" , false           ) );
console.log( "Testing Condition  3 Passed = " + arrayEqual(  [ "Hallo" , "World" ] , "World" , true            ) );
console.log( "Testing Condition  4 Passed = " + arrayEqual(  [ "Hallo" , "World" ] , "World" , false           ) );
console.log( "Testing Condition  5 Passed = " + !arrayEqual( [ "Hallo" , "World" ] , "Beams"                   ) );
console.log( "Testing Condition  6 Passed = " + !arrayEqual( [ "Hallo" , "World" ] , "beans"                   ) );
console.log( "Testing Condition  7 Passed = " + ( arrayEqual( "Hallo World" , "beans" ) == null ? true : false ) );