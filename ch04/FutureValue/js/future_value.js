"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

var processEntries = function () {
  var investment=$('investment');
  var rate=$('rate');
  var years=$('years');
  var error_vali=true;
  if(isNaN(investment.value) || investment.value==''){
    $('investment_vali').firstChild.nodeValue='Investment must be numeric';
    error_vali=false;
  }
  else if (parseFloat(investment.value)<=0 || parseFloat(investment.value)>100000) {
    $('investment_vali').firstChild.nodeValue='Investment must be greater than zero and <= 100000';
    error_vali=false;
  }
  else{
    $('investment_vali').firstChild.nodeValue='';
  }
  if(isNaN(rate.value) || rate.value==''){
    $('rate_vali').firstChild.nodeValue='rate must be numeric';
    error_vali=false;
  }
  else if (parseFloat(rate.value)<=0 || parseFloat(rate.value)>15) {
    $('rate_vali').firstChild.nodeValue='rate must be greater than zero and <= 15';
    error_vali=false;
  }
  else{
    $('rate_vali').firstChild.nodeValue='';
  }
  if(isNaN(years.value) || years.value==''){
    $('years_vali').firstChild.nodeValue='years must be numeric';
    error_vali=false;
  }
  else if (parseFloat(years.value)<=0 || parseFloat(years.value)>50) {
    $('years_vali').firstChild.nodeValue='years must be greater than zero and <= 50';
    error_vali=false;
  }
  else{
    $('years_vali').firstChild.nodeValue='';
  }
  if(error_vali){
    investment=parseFloat(investment.value);
    rate=parseFloat(rate.value);
    years=parseFloat(years.value);
    $("result").value = calculateFV(investment, rate, years);
  }
    
  
};
function calculateFV(investment,rate,years){
  var futureValue = investment;
  for (var i = 1; i <= years; i++) {
    futureValue = futureValue + (futureValue * rate) / 100;
  }
  return parseFloat(futureValue).toFixed(2);
}


window.onload = function () {
  $("calculate").onclick = processEntries;
  $("investment").focus();
};
