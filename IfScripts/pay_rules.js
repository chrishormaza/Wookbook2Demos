"use strict";

var payRate = 17.30;
var hoursWorked = 45;

if (hoursWorked <= 40){
    grossPay = payRate * hoursWorked;
}
else{
    var basePay = 40 * payRate;
    var overtimeHours = hoursWorked - 40;

    var overtimePay = overtimeHours * (payRate * 1.5);

    grossPay = basePay + overtimePay;
}

var grossPay;

console.log(grossPay);