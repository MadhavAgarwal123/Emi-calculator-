const loan = document.getElementById("loan");
const rate = document.getElementById("rate");
const years = document.getElementById("years");

loan.value = 1000000;
rate.value = 8.5;
years.value = 10;

function format(num){

return "₹" + Number(num).toLocaleString("en-IN",{
maximumFractionDigits:0
});

}

function calculateEMI(){

let P = parseFloat(loan.value);

let R = parseFloat(rate.value)/12/100;

let N = parseFloat(years.value)*12;

let EMI = (P*R*Math.pow((1+R),N))/(Math.pow((1+R),N)-1);

let totalPayment = EMI*N;

let totalInterest = totalPayment-P;

document.getElementById("loanValue").innerHTML=format(P);

document.getElementById("rateValue").innerHTML=rate.value+" %";

document.getElementById("yearValue").innerHTML=years.value+" Years";

document.getElementById("emi").innerHTML=format(EMI);

document.getElementById("interest").innerHTML=format(totalInterest);

document.getElementById("payment").innerHTML=format(totalPayment);

}

loan.addEventListener("input",calculateEMI);
rate.addEventListener("input",calculateEMI);
years.addEventListener("input",calculateEMI);

calculateEMI();