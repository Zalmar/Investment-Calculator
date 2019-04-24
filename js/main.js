function getValues() {
  let deposit = document.getElementById("money").value
  let term = document.getElementById("mounths").value

  let radioBtns = document.getElementsByName("radio-buttons")
  for(let i = 0; i < radioBtns.length; i++){
    if(radioBtns[i].checked){
      checkBtn = radioBtns[i].value;
      document.getElementById("pros").innerHTML = checkBtn;
    }
  }
  
  document.getElementById("rangeMoney").innerHTML = document.getElementById("money").value;
  document.getElementById("rangeMonths").innerHTML = document.getElementById("mounths").value;

  let leftProfit = calcProfit(deposit, 6.5, term);
  let rightProfit = calcProfit(deposit, checkBtn, term);
  document.getElementById("left-profit").innerHTML = leftProfit
  document.getElementById("right-profit").innerHTML = rightProfit;
  
  let cylinderHeigth = ((rightProfit-leftProfit)/rightProfit) 
  let cylinder = document.getElementById("lc");
  cylinder.style.height = 220 - (200 * cylinderHeigth)  + "px";
  cylinder.style.transitionDuration = "0.5s";


  let moneySlider = document.getElementById("money");
  moneySlider.style.background = 'linear-gradient(to right, #4bd1a0 0%, #4bd1a0 '+moneySlider.value / 100000 +'%, #e6e6e6 ' + moneySlider.value / 100000 + '%, #e6e6e6 100%)'
  let mounthsSlider = document.getElementById("mounths");
  mounthsSlider.style.background = 'linear-gradient(to right, #4bd1a0 0%, #4bd1a0 '+ mounthsSlider.value * 1.6 +'%, #e6e6e6 ' + mounthsSlider.value * 1.6 + '%, #e6e6e6 100%)'
};

function calcProfit (deposit, pros, term) {
  return Math.round(deposit * (1 + ((pros/100) / 12)) ** term) - deposit
}

getValues();