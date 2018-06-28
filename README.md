# CountryApp

## Description

The goal of this React Web application is to fetch a list of countries from a public API. 

### The application have three pages : 
1. Page on which you’ll display a list of all countries.
2. Page on which you’ll display a list of all countries from the european union.
3. Page allowing to search for countries based on their name.


### Index

* [How to run](#how-to-run)
* [Implementation details](#implementation-details)
* [Libraries](#libraries)


---

## How to run

1. Firstly, you have to enter the directory with project. After that you have to install dependencies:
 
    - npm install  

2. After successful installation run: 

    - node app.js

3. Following pages are available:

* All countries 

    - localhost:5000/all 

* European Union countries

    - localhost:5000/eu 

* Search of countries by their name

    - localhost:5000/search 
    
[TOP](#index)

___

## Implementation details

By clicking on one of the lines, a pop-up will appear. The pop-up contains more informations about the country. Those information are :
* The name of the country
* The capital city of the country
* The alpha2code of the country
* The alpha3code of the country
* The region of the country
* The number of people living in that country

There is also pagination in the front end. Its size is by default set to 10, if you would like to increase, then you have to modify value of countryListSize in CountryList.js.

[TOP](#index)

___

## Libraries

* react
* react-dom
* babel
* semantic-ui

[TOP](#index)

___