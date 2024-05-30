let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;
  
  document.querySelector('.js-calculation-result').innerHTML = `${calculation}`;

  localStorage.setItem('calculation', calculation);
}

function result(){
  calculation = eval(calculation);   // eval('55 + 5') = 60
  
  document.querySelector('.js-calculation-result').innerHTML = `${calculation}`;

  // save here
  localStorage.setItem('calculation', calculation);
}

function clearBtn(){
  calculation = '';
  
  document.querySelector('.js-calculation-result').innerHTML = '';

  // save here as well
  localStorage.setItem('calculation', calculation);
}

function saveCalculation(){
  localStorage.setItem('calculation', calculation);
}