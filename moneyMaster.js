function getInput(name) {
    let field = document.getElementById(name);
    let fieldValue = field.value;
    let fieldNum = parseFloat(fieldValue);
    return fieldNum;
};
document.getElementById('button').addEventListener('click', function () {
    let saleryInput = getInput('salery-input');
    let getFood = getInput('food-input');
    let getRent = getInput('rent-input');
    let getCloths = getInput('cloths-input');
    let cost = getFood + getRent + getCloths;
    let expense = document.getElementById('cost');
    let remainigBalance = document.getElementById('remainig-balance');
    if (saleryInput < cost && saleryInput > 0) {
        let expense = document.getElementById('cost');
        let balance = document.getElementById('remainig-balance');
        expense.innerText = 'Your expence is more than your earning';
    }
    else if(saleryInput > cost && cost > 0){
        let result = saleryInput - cost;
        expense.innerText = cost;
        remainigBalance.innerText = result;
    }
    else {
        let expense = document.getElementById('cost');
        let balance = document.getElementById('remainig-balance');
        expense.innerText = 'Please input number';
        balance.innerText = 'Please input number';
    }
});
function getNumber(name) {
    let outpotSection = document.getElementById(name);
    let outpotText = outpotSection.innerText;
    let outpotNum = parseFloat(outpotText);
    return outpotNum;
};
document.getElementById('savaings-button').addEventListener('click',function(){
    let saleryInput = getInput('salery-input');
    let getInputOfRate = getInput('rate');
    let getRate = getInputOfRate / 100;
    let remainigBalance = getNumber('remainig-balance');
    let getBalance = document.getElementById('total-money');
    let getSavings = document.getElementById('savings');
    let savings = saleryInput * getRate;
    if(savings < remainigBalance){
        getSavings.innerText = savings;
        getBalance.innerText = remainigBalance - savings;
    }
    else if(savings > remainigBalance){
        getBalance.innerText = remainigBalance - savings;
    }
    else{
        getSavings.innerText = 'Please input less than 100';
        getBalance.innerText = remainigBalance - savings;
    }
});