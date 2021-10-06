//HOW MUCH SHOULD I SAVE: BUDGET CALCULATOR

function calculateIt() {
    // call form data
    var price = document.getElementById('price').value;
    var years = document.getElementById('years').value;
    var downPayment = document.getElementById('downPayment').value;
    var interest = document.getElementById('interest').value;

    // constants            
    var oneHundred = 100
    var monthsInAYear = 12;

    // calculate percentages
    var interestPercentage = interest / oneHundred;
    var downPaymentPercentage = downPayment / oneHundred;

    // calculate budgets
    var downPaymentTotal = (downPaymentPercentage * price);
    var interestAmount = price * interestPercentage;
    var priceWithInterest = (parseFloat(interestAmount) + parseFloat(price));
    var totalCosts = priceWithInterest - downPaymentTotal
    var monthlyCosts = parseFloat(totalCosts) / (parseFloat(years) * parseFloat(monthsInAYear))

    // format to two decimal points
    document.getElementById("total").innerHTML = monthlyCosts.toFixed(2); 

    // chapter 4 error message
    
    try {
        monthlyCosts = parseFloat(monthlyCosts);
    } catch (err) {
        console.log('You have encountered an error. It is:' + err);
    }
}

// compare the rates in index/home page
function compareRates() {

    var result = '';
    var budget = document.getElementById('budgetInput').value;
    
    var monthlyCosts = document.getElementById('total').innerHTML;

    if (parseFloat(budget) >= parseFloat(monthlyCosts)) {
        result = 'You are in budget. Yay!';
    } else {
        result = 'You are not in budget, :(';
    }

    document.getElementById('comparison').innerHTML = result;

}

// END BUDGET CALCULATOR