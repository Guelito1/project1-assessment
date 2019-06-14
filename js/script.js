// variables

// dom hooks

var minusBtn = document.getElementById('minus');
var pluseBtn = document.getElementById('plus');
var displayNum = document.getElementById('displaynum').textContent;
var inputNum = document.getElementById('inputnum');


pluseBtn.addEventListener('click', function() {
    displayNum = parseInt(displayNum) + parseInt(inputNum.value);
    document.getElementById('displaynum').innerHTML = displayNum;

});

minusBtn.addEventListener('click', function() {
    displayNum = parseInt(displayNum) - parseInt(inputNum.value);
    document.getElementById('displaynum').innerHTML = displayNum;
});