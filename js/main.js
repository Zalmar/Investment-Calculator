function getValues() {

  let deposit = parseInt(document.getElementById("money").value)
  let term = parseInt(document.getElementById("mounths").value)

  let radioBtns = document.getElementsByName("radio-buttons")
  for(let i = 0; i < radioBtns.length; i++){
    if(radioBtns[i].checked){
      checkBtn = radioBtns[i].value;
      document.getElementById("pers").innerHTML = checkBtn;
    }
  }
  
  document.getElementById("rangeMoney").innerHTML = deposit.toLocaleString();
  document.getElementById("rangeMonths").innerHTML = term;
  
  //расчет суммы профита 
  let leftProfit = calcProfit(deposit, 6.5, term);
  let rightProfit = calcProfit(deposit, checkBtn, term);

  document.getElementById("left-profit").innerHTML = leftProfit.toLocaleString();
  document.getElementById("right-profit").innerHTML = rightProfit.toLocaleString();

  // получение столбцов
  let leftCylinder = document.getElementById("lc");
  let rightCylinder = document.getElementById("rc");

  let delta = (rightProfit - leftProfit) / leftProfit  
  console.log(delta)

  leftCylinder.style.height = 199 - (199 * delta) + 'px';
  leftCylinder.style.transitionDuration = "0.5s";

  let moneySlider = document.getElementById("money");
  moneySlider.style.background = 'linear-gradient(to right, #4bd1a0 0%, #4bd1a0 '+moneySlider.value / 100000 +'%, #e6e6e6 ' + moneySlider.value / 100000 + '%, #e6e6e6 100%)'
  let mounthsSlider = document.getElementById("mounths");
  mounthsSlider.style.background = 'linear-gradient(to right, #4bd1a0 0%, #4bd1a0 '+ mounthsSlider.value * 1.6 +'%, #e6e6e6 ' + mounthsSlider.value * 1.6 + '%, #e6e6e6 100%)'
};

function calcProfit (deposit, pers, term) {
  return Math.round(deposit * (1 + (pers / 100) / 12) ** term) - deposit
}

getValues();
