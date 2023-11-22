"use  strict";

//Input
var savings = 369000;
var interestRate = 6;

//Rule 
var rule72 = 72/interestRate;
var savingsAfter = savings * 2

//output
var message = "At a " + interestRate + "% interest rate, your savings account will be worth $" + savingsAfter.toFixed(2) + " in " + rule72 + " years.";
console.log(message)