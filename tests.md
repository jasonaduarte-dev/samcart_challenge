----------
Unit tests
----------
1. 

URL:
----
http://superlite.io:3000/

Response:
---------
samcart_challenge node.js server

Test result: 
------------
pass, J Duarte - 2021-01-21

2. 

URL:
----
http://superlite.io:3000/cars

Response:
---------
select a car

Ford F10
Toyota Camry
Toyota Rav4
Ford Bronco

Test result: 
------------
pass, J Duarte - 2021-01-21

3. Positive test

URL:
----
http://superlite.io:3000/cars/JHK290Xj

Response:
---------
select a car

Ford F10
Toyota Camry
Toyota Rav4
Ford Bronco

Test result: 
------------
pass, J Duarte - 2021-01-21

4. Negative test

URL:
----
http://superlite.io:3000/cars/test

Response:
---------
[]

Test result: 
------------
pass, J Duarte - 2021-01-21


-----------------
Integration tests
-----------------

----------------
Functional tests
----------------
Selecting a car, returns the json array with all attributes for that vehicle. 
